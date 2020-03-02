//name:"도로명주소 검색 API",
var { IxDatabase } = require("./db");
var { dom, get } = require("./comm");

class JusoSearch {
    constructor(options) {
        this.options = Object.assign({
            ctrl: {
                button: "juso_search_btn",
                input: "juso_search_text"
            },
            name: "juso_search_text",
            key: "E98EFC70-3AD7-3F4E-BCE0-6A67F1CB23B8",
            types: [
                { index: 0, id: "search-place", type: "place", category: "" },
                { index: 1, id: "search-road", type: "address", category: "road" },
                { index: 2, id: "search-parcel", type: "address", category: "parcel" }
            ]
        }, options);
        this.db = new IxDatabase(1, "juso");
        this.init();
    }
    init() {
        let _this = this;
        this.db.get("juso", this.options.name, function(result) {
            !result || !result.value || (function(result) {
                dom.$("#" + _this.options.ctrl.input).value = result.value;
                _this.call({ keyword: result.value });
            })(result);
        });
        dom.$("#" + _this.options.ctrl.button)[0].onclick = function() {
            _this._callByTrigger();
        }
        dom.$("#" + _this.options.ctrl.input)[0].onkeypress = function(e) {
            !(e.which == 13) || _this._callByTrigger();
        }
    }
    _callByTrigger() {
        let _this = this;
        var txt = dom.$("#" + _this.options.ctrl.input)[0].value;
        !txt || !(txt.trim().length > 0) || (function(txt) {
            _this.call({ keyword: txt });
            _this.db.set("juso", _this.options.name, txt);
        })(txt.trim());
    }
    call(option) {
        option.countPerPage = 10;
        let _this = this;
        this.options.types.forEach(function(t) {
            var opt = Object.assign({}, option);

            if (!opt.searchType || opt.searchType.id == t.id) {
                /*
                if (qU(opt.refreshPagination)) {
                    $("[data-target='#" + t.id + "']>label").html("<img src='img/wait.gif' height='20'/>");
                }*/

                _this._call(t, opt, function(keyword, type, response) {
                    if (keyword) {
                        var str1 = "";

                        $("#" + type.id).empty();
                        if (response.result) {
                            var crs = response.result.crs;
                            response.result.items.forEach(function(d, i) {
                                str1 += "<dl class='juso_result_item' data-cache='" + i + "' onclick='application.openedMaps(function(omap){ omap.move(17," + d.point.x + "," + d.point.y + ",\"" + crs + "\",true); });'>";
                                if (t.type == "place") {
                                    var title = d.title ? d.title : (d.bldnm ? d.bldnm : "");
                                    str1 += "<dt><i class='fa fa-map-marker' aria-hidden='true'></i>&nbsp;" + title + "</dt>";
                                    str1 += "<dd>";
                                    str1 += "<i class='fa fa-home' aria-hidden='true'></i>&nbsp;<span>" + d.address.parcel + "</span>";
                                    str1 += "</dd>";
                                    str1 += "<dd>";
                                    str1 += "<i class='fa fa-road' aria-hidden='true'></i>&nbsp;<span>" + d.address.road + "</span>";
                                    str1 += "</dd>";
                                } else if (t.category == "road") {
                                    str1 += "<dt><i class='fa fa-road' aria-hidden='true'></i>&nbsp;" + d.address.road + "</dt>";
                                } else {
                                    str1 += "<dt><i class='fa fa-home' aria-hidden='true'></i>&nbsp;" + d.address.parcel + "</dt>";
                                }
                                str1 += "</dl>";

                            });
                            $("#" + type.id).append(str1);
                            _this.page(keyword, type, response);
                        }
                        if (opt.refreshPagination) {
                            $("[data-target='#" + type.id + "']>label").text("(" + response.record.total + ")");
                        }

                    } else {
                        $("#" + t.id).empty();
                    }

                });
            }

        });
    }
    _call(searchType, option, callback) {
        let keyword = encodeURIComponent(option.keyword); //.replace(/\s/g, '');
        let str = "http://api.vworld.kr/req/search?" +
            "key=" + this.options.key + "&" +
            "page=" + (option.currentPage ? 1 : option.currentPage) + "&" +
            "size=" + (option.countPerPage ? 10 : option.countPerPage) + "&" +
            "query=" + keyword + "&" +
            "request=search&" +
            "type=" + searchType.type + "&" +
            "category=" + searchType.category + "&" +
            "format=json";

        let url = encodeURIComponent(str);

        get({
            url: "map/juso.do?url=" + url,
            dataType: "json",
            success: function(status, textStatus, data) {
                !callback || callback(option.keyword, searchType, data);
            },
            error: function(status, textStatus, evt) {
                !callback || callback();
            }
        });
    }
    searchPlace(option) {
        option.searchType = this.options.types[0];
        this.call(option);
    }
    searchRoad(option) {
        option.searchType = this.options.types[1];
        this.call(option);
    }
    searchParcel(option) {
        option.searchType = this.options.types[2];
        this.call(option);
    }
    page(response) {
        let total = response.record.total;
        let totalPage = response.page.total;
        let recordPerPage = parseInt(response.page.size);
        let pageSize = 5; //parseInt(response.page.size);
        let currentPage = parseInt(response.page.current);

        let strTest = "";
        strTest += "<p id='page_wrap' class='pagination'>";
        if (currentPage > pageSize * 2) {
            strTest += "<button type='button' class='btn_first' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + ",1,true)' ></button>";
        }
        if (currentPage - pageSize > 0) {
            strTest += "<button type='button' class='btn_pre' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + "," + (currentPage - pageSize) + ",true)' ></button>";
        }

        strTest += "<span id='page_count'>";
        let startPage = parseInt((currentPage - 1) / pageSize) * pageSize;
        let endPage = startPage + pageSize;
        for (var c = startPage; c < totalPage && c < endPage; c++) {
            if (currentPage == c + 1) {
                strTest += "<a href='javascript:void(0);' style='color:red;' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + "," + (c + 1) + ",false)' >" + (c + 1) + "</a>";
            } else {
                strTest += "<a href='javascript:void(0);' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + "," + (c + 1) + ",false)' >" + (c + 1) + "</a>";
            }

        }
        strTest += "</span>";

        if (endPage < totalPage) {
            strTest += "<button type='button' class='btn_next' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + "," + (currentPage + pageSize) + ",true)' ></button>";
        }
        if ((endPage + pageSize) < totalPage) {
            strTest += "<button type='button' class='btn_last' onclick='juso.pageCall(\"" + keyword + "\"," + type.index + "," + (totalPage - 1) + ",true)' ></button>";
        }
        strTest += "</p>";

        $("#" + type.id).append(strTest);
        $("#" + type.id + ">label").text("(" + total + ")");
    }
    pageCall(keyword, typeIndex, page, refreshPagination) {
        let option = {
            keyword: keyword,
            currentPage: page,
            countPerPage: this.options.countPerPage,
            refreshPagination: refreshPagination
        }
        if (typeIndex >= 3) {
            typeIndex = 0;
        }
        option.searchType = this.options.types[typeIndex];
        this.call(option);
    }
    callForPosition(option) {
        get({
            url: "http://www.juso.go.kr/addrlink/addrCoordApi.do",
            data: {
                confmKey: "devU01TX0FVVEgyMDE5MTAxNjEzMzQwODEwOTA5MzY=",
                admCd: option.admCd,
                rnMgtSn: option.rnMgtSn,
                udrtYn: option.udrtYn,
                buldMnnm: option.buldMnnm,
                buldSlno: option.buldSlno,
                resultType: "json"
            },
            success: function(status, textStatus, data) {
                console.log(data);
                !data.results.juso;

                //if (!qU(data.results.juso)) {
                //   let item = data.results.juso;
                //application.openedMaps(function(omap) { omap.move(19, item[0].entX, item[0].entY); });
                //}
            },
            error: function(status, textStatus, evt) {
                console.error(data);
            }
        });
    }
}


module.exports = {
    JusoSearch: JusoSearch
}