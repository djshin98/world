//name:"도로명주소 검색 API",
import {IxDatabase} from "./db";
import {dom} from "./comm";

class JusoSearch {
    constructor(options){
        this.options = Object.assign({
            ctrl:{
                button:"juso_search_btn",
                input:"juso_search_text"
            },
            name:"juso_search_text",
            key:"E98EFC70-3AD7-3F4E-BCE0-6A67F1CB23B8",
            types : [
                {index:0,id:"search-place", type:"place", category:""},
                {index:1,id:"search-road", type:"address", category:"road"},
                {index:2,id:"search-parcel", type:"address", category:"parcel"}
            ]
        }, options);
        this.db = new IxDatabase(1,"juso");
        this.init();
    }
    init(){
        let _this = this;
        this.db.get("juso",this.options.name,function(result){
            !result || !result.value || (function(result){
                dom.$("#"+_this.options.ctrl.input).value = result.value;
                juso.call({keyword:result.value});
            })(result);
        });
        dom.$("#"+_this.options.ctrl.button).onclick = function(){
            _this._callByTrigger();
        }
        dom.$("#"+_this.options.ctrl.input).onkeypress = function(e){
            !(e.which == 13) || _this._callByTrigger();
        }  
    }
    _callByTrigger(){
        let _this = this;
        var txt = dom.$("#"+_this.options.ctrl.input).value;
        !txt || !(txt.trim().length > 0) || (function(txt){
            juso.call({keyword:txt});
            _this.db.set("juso",_this.options.name,txt);
        })(txt.trim());
    }
    call(option){
        option.countPerPage = 10;
        this.types.forEach(function(t){
            var opt = Object.assign({},option);
            
            if( qU(opt.searchType) || opt.searchType.id == t.id ){
                if( qU(option.refreshPagination) ){
                    $("[data-target='#"+t.id +"']>label").html("<img src='img/wait.gif' height='20'/>");	
                } 
                
                juso._call(t,opt,function(keyword,type,response){
                    if( !qU(keyword) ){
                        var str1 = "";
                        
                        $("#"+type.id).empty();
                        if( !qU(response.result) ){
                            var crs = response.result.crs;
                            response.result.items.forEach(function(d,i){
                                str1 += "<dl class='juso_result_item' data-cache='"+i+"' onclick='application.openedMaps(function(omap){ omap.move(17,"+d.point.x+","+d.point.y+",\""+crs+"\",true); });'>";
                                if( t.type == "place" ){
                                    var title = (!qU(d.title)?d.title:(!qU(d.bldnm)?d.bldnm:""));
                                    str1 += "<dt><i class='fa fa-map-marker' aria-hidden='true'></i>&nbsp;"+title+"</dt>";
                                    str1 += "<dd>";
                                    str1 += "<i class='fa fa-home' aria-hidden='true'></i>&nbsp;<span>"+d.address.parcel+"</span>";
                                    str1 += "</dd>";
                                    str1 += "<dd>";
                                    str1 += "<i class='fa fa-road' aria-hidden='true'></i>&nbsp;<span>"+d.address.road+"</span>";
                                    str1 += "</dd>";
                                }else if( t.category == "road" ){
                                    str1 += "<dt><i class='fa fa-road' aria-hidden='true'></i>&nbsp;"+d.address.road+"</dt>";
                                }else{
                                    str1 += "<dt><i class='fa fa-home' aria-hidden='true'></i>&nbsp;"+d.address.parcel+"</dt>";
                                }
                                str1 += "</dl>";
                                
                            });
                            $("#"+type.id).append(str1);
                            juso.page(keyword,type,response);
                        }
                        if( qU(option.refreshPagination) ){
                            $("[data-target='#"+type.id +"']>label").text("(" + response.record.total + ")");
                        }
                        
                    }else{
                        $("#"+t.id).empty();
                    }
                    
                });
            } 
            
        });
    }
}
let juso = {
    
    
    page:function(keyword,type,response){
        var total = response.record.total;
        var totalPage = response.page.total;
        var recordPerPage = parseInt(response.page.size);
        var pageSize = 5; //parseInt(response.page.size);
        var currentPage = parseInt(response.page.current);
        
        var strTest = "";
        strTest += "<p id='page_wrap' class='pagination'>";
        if( currentPage > pageSize*2 ){
            strTest += "<button type='button' class='btn_first' onclick='juso.pageCall(\""+keyword+"\","+type.index+",1,true)' ></button>";	
        }
        if( currentPage-pageSize > 0 ){
            strTest += "<button type='button' class='btn_pre' onclick='juso.pageCall(\""+keyword+"\","+type.index+","+(currentPage-pageSize)+",true)' ></button>";
        }
        
        strTest += "<span id='page_count'>";
        var startPage = parseInt((currentPage-1)/pageSize) * pageSize;
        var endPage = startPage + pageSize;
        for( var c = startPage ; c < totalPage && c < endPage; c++ ){
            if( currentPage == c+1 ){
                strTest += "<a href='javascript:void(0);' style='color:red;' onclick='juso.pageCall(\""+keyword+"\","+type.index+","+(c+1)+",false)' >"+(c+1)+"</a>";
            }else{
                strTest += "<a href='javascript:void(0);' onclick='juso.pageCall(\""+keyword+"\","+type.index+","+(c+1)+",false)' >"+(c+1)+"</a>";	
            }
            
        }
        strTest += "</span>";

        if( endPage < totalPage ){
            strTest += "<button type='button' class='btn_next' onclick='juso.pageCall(\""+keyword+"\","+type.index+","+(currentPage+pageSize)+",true)' ></button>";
        }
        if( (endPage + pageSize ) < totalPage ){
            strTest += "<button type='button' class='btn_last' onclick='juso.pageCall(\""+keyword+"\","+type.index+","+(totalPage-1)+",true)' ></button>";
        }
        strTest += "</p>"; 
        
        $("#"+type.id).append(strTest);
        $("#"+type.id + ">label").text("(" + total + ")");
    },
    pageCall:function(keyword,typeIndex,page,refreshPagination){
        var option = {
            keyword:keyword,
            currentPage:page,
            countPerPage:juso.countPerPage,
            refreshPagination:refreshPagination
        }
        if( typeIndex >= 3){
            typeIndex = 0;
        }
        option.searchType = juso.types[typeIndex];
        juso.call(option);	
    }, 
    _call:function(searchType,option,callback){
        var keyword = encodeURIComponent(option.keyword); //.replace(/\s/g, '');
        var str = "http://api.vworld.kr/req/search?"+
            "key=" + juso.key + "&" +
            "page=" + (qU(option.currentPage) ? 1 : option.currentPage) + "&" + 
            "size=" + (qU(option.countPerPage) ? 10 : option.countPerPage) + "&" + 
            "query=" + keyword + "&" + 
            "request=search&"+ 
            "type="+ searchType.type + "&" + 
            "category=" + searchType.category + "&" + 
            "format=json";
            
        var url = encodeURIComponent( str );
        $.ajax({
            type:'GET',
            url : "map/juso.do?url=" + url,
            dataType: "json",
            success : function(data){
                if( !qU(data.response.error) ){
                    alert(data.response.error.text);
                    return;
                }
                
                if( !qU(callback) && !qU(data.response) ){
                    callback(option.keyword,searchType,data.response);
                }
            },
            error : function( xqXHR, textStatus, errorThrown ){
                callback();
            }
        });
    },
    searchPlace:function(option){ option.searchType = juso.types[0]; juso.call(option); },
    searchRoad:function(option){ option.searchType = juso.types[1]; juso.call(option); },
    searchParcel:function(option){ option.searchType = juso.types[2]; juso.call(option); },
    
};

let geo = {
    name : "좌표제공 검색 API",
    key : "devU01TX0FVVEgyMDE5MTAxNjEzMzQwODEwOTA5MzY=",
    call : function(option){
        $.ajax({
            url : "http://www.juso.go.kr/addrlink/addrCoordApi.do",
            data :{
                confmKey : geo.key,
                admCd : option.admCd,
                rnMgtSn : option.rnMgtSn,
                udrtYn : option.udrtYn,
                buldMnnm : option.buldMnnm,
                buldSlno : option.buldSlno,
                resultType : "json"
            },
            success : function(data){
                console.log(data);
                if( !qU(data.results.juso) ){
                    var item = data.results.juso;
                    application.openedMaps(function(omap){ omap.move(19,item[0].entX,item[0].entY); });
                }
            },
            error : function( xqXHR, textStatus, errorThrown ){
                console.error(data);
            }
        });
    }
}