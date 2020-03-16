//name:"도로명주소 검색 API",
var { IxDatabase } = require("./db");
var { dom, get } = require("./comm");
var axios = require('axios');
var service = require('./service/posts.js');

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
            ],
            countPerPage: 10
        }, options);
        this.db = new IxDatabase(1, "juso");
        this.init();
    }
    init() {
        let _this = this;
        this.db.get("juso", this.options.name, function (result) {
            !result || !result.value || (function (result) {
                $("#" + _this.options.ctrl.input).val(result.value);
                _this.call({ keyword: result.value });
                $(".accordion>.title:first-child>i").trigger("click");
            })(result);
        });
        dom.$("#" + _this.options.ctrl.button)[0].onclick = function () {
            _this._callByTrigger();
        }
        dom.$("#" + _this.options.ctrl.input)[0].onkeypress = function (e) {
            !(e.which == 13) || _this._callByTrigger();
        }

    }
    _callByTrigger() {
        let _this = this;
        var txt = dom.$("#" + _this.options.ctrl.input)[0].value;
        !txt || !(txt.trim().length > 0) || (function (txt) {
            _this.call({ keyword: txt });
            _this.db.set("juso", _this.options.name, txt);
        })(txt.trim());
    }
    call(option) {
        option.countPerPage = option.countPerPage || this.options.countPerPage;
        option.currentPage = option.currentPage || 1;
        let _this = this;
        this.options.types.forEach(function (t) {
            var opt = Object.assign({}, option);

            if (!opt.searchType || opt.searchType.id == t.id) {
                if (!opt.searchType) {
                    $(".accordion>.title:first-child>i").trigger("click");
                }
                /*
                if (qU(opt.refreshPagination)) {
                    $("[data-target='#" + t.id + "']>label").html("<img src='img/wait.gif' height='20'/>");
                }*/

                _this._call(t, opt, function (keyword, type, response) {
                    if (keyword) {
                        var str1 = "";
                        var response = response.obj.response;
                        $("#" + type.id).empty();
                        if (response.result) {
                            var crs = response.result.crs;

                            response.result.items.forEach(function (d, i) {
                                str1 += "<div class='item'>";
                                str1 += "<i class='map marker icon'></i>";
                                str1 += "<div class='juso' onclick='map.flyTo(" + d.point.x + ", " + d.point.y + ")'>";
                                if (t.type == "place") {
                                    var title = d.title ? d.title : (d.bldnm ? d.bldnm : "");
                                    str1 += "<a class='header'>" + title + "</a>";
                                    str1 += "<div class='description'>" + d.address.parcel + "</div>";
                                } else if (t.type == "road") {
                                    str1 += "<a class='header'>" + d.address.road + "</a>";
                                } else {
                                    str1 += "<a class='header'>" + d.address.parcel + "</a>";
                                }
                                str1 += "</div>"
                                str1 += "</div><br/>"
                            });
                            $("#" + type.id).append(str1);
                            $("#" + type.id + "-count").html("(" + response.record.total + "&nbsp;건)");
                            _this.page(keyword, type, response);
                        }
                        //if (opt.refreshPagination) {
                        //    $("[data-target='#" + type.id + "']>label").text("(" + response.record.total + ")");
                        //}

                    } else {
                        $("#" + t.id).empty();
                    }

                });
            }

        });
    }
    _call(searchType, option, callback) {
        // let keyword = encodeURIComponent(option.keyword); //.replace(/\s/g, '');
        let str = "http://api.vworld.kr/req/search?" +
            "key=" + this.options.key + "&" +
            "page=" + (option.currentPage ? option.currentPage : 1) + "&" +
            "size=" + (option.countPerPage ? option.countPerPage : 10) + "&" +
            "query=" + encodeURI(option.keyword) + "&" +
            "request=search&" +
            "type=" + searchType.type + "&" +
            "category=" + searchType.category + "&" +
            "format=json";
        // cd src로 이동하여 node server.js 로 express 서버를 구동하여야 실행된다...
        var _this = this;
        axios.get("http://localhost:8082/map/juso", {
            params: {
                url: str
            }
        }).then(
            res => {
                callback(option.keyword, searchType, res.data);
                _this.db.set("juso", _this.options.name, option.keyword);
            }
        );
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
    page(keyword, type, response) {
        let total = response.record.total;
        let totalPage = response.page.total;
        let recordPerPage = parseInt(response.page.size);
        let pageSize = 5; //parseInt(response.page.size);
        let currentPage = parseInt(response.page.current);

        let strTest = "";
        strTest += "<div class='ui horizontal divider'></div>";
        strTest += "<div id='page_wrap' class='pagination ui small basic icon buttons'>";
        if (currentPage > pageSize * 2) {
            strTest += "<button type='button' class='btn_first ui button' onclick='app.section.getPlugin(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + ",1,true)' ><i class='ui angle double left icon'></i></button>";
        }
        if (currentPage - pageSize > 0) {
            strTest += "<button type='button' class='btn_pre ui button' onclick='app.(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + "," + (currentPage - pageSize) + ",true)' ><i class='ui angle left icon'></i></button>";
        }

        //strTest += "<span id='page_count'>";
        let startPage = parseInt((currentPage - 1) / pageSize) * pageSize;
        let endPage = startPage + pageSize;
        for (var c = startPage; c < totalPage && c < endPage; c++) {
            if (currentPage == c + 1) {
                strTest += "<button class='ui button' style='color:red;' onclick='app.(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + "," + (c + 1) + ",false)' >" + (c + 1) + "</button>";
            } else {
                strTest += "<button class='ui button' onclick='app.section.getPlugin(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + "," + (c + 1) + ",false)' >" + (c + 1) + "</button>";
            }

        }
        //strTest += "</span>";

        if (endPage < totalPage) {
            strTest += "<button type='button' class='btn_next ui button' onclick='app.section.getPlugin(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + "," + (currentPage + pageSize) + ",true)' ><i class=' ui angle right icon'></i></button>";
        }
        if ((endPage + pageSize) < totalPage) {
            strTest += "<button type='button' class='btn_last ui button' onclick='app.section.getPlugin(\"JusoSearch\").pageCall(\"" + keyword + "\"," + type.index + "," + (totalPage - 1) + ",true)' ><i class=' ui angle double right icon'></i></button>";
        }
        strTest += "</div>";

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
            success: function (status, textStatus, data) {
                console.log(data);
                !data.results.juso;

                //if (!qU(data.results.juso)) {
                //   let item = data.results.juso;
                //application.openedMaps(function(omap) { omap.move(19, item[0].entX, item[0].entY); });
                //}
            },
            error: function (status, textStatus, evt) {
                console.error(data);
            }
        });
    }
}


module.exports = {
    JusoSearch: JusoSearch
}