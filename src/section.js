var {get, post } = require("./comm");

function Section(app, option, callback) {
    this.app = app;
    this.option = option;
    this.onLoad = callback;

    var _this = this;
    var totalUrl = this.option.contents.reduce(function(prev, curr, i) {
        return prev + curr.tabs.reduce(function(p, c) { return p + 1; }, 0);
    }, 0);
    this.option.contents.forEach(function(content, ci) {
        var defSection = (!qU(defSection)) ? defSection : content.id;
        var defTab;
        content.tabs.forEach(function(tab, ti) {
            if (qU(tab.id)) {
                tab.id = "map" + (ci * 10 + ti);
            }
            defTab = (!qU(defTab)) ? defTab : tab.id;
            tab.parent = content;
            //get html
            $.ajax({
                url: tab.src,
                success: function(data) {
                    $("#" + _this.option.id).append("<div data-content='" + tab.id + "' class='" + _this.option.tabContentClass + "'></div>");
                    var $c = $("#" + _this.option.id + " .tab_cont[data-content=" + tab.id + "]");
                    $c.append(data);
                    $c.hide();
                },
                timeout: 2000,
                error: function(xqXHR, textStatus, errorThrown) {

                },
                complete: function(xqXHT, textStatus) {
                    if (--totalUrl == 0) {
                        var isub = location.href.indexOf("#");
                        if (isub > 0) {
                            var sub = location.href.substring(isub + 1);
                            var subs = sub.split("/");
                            if (subs.length > 0) {
                                var subObj = _this.option.contents.find(function(d, i) {
                                    if (d.id == subs[0]) {
                                        return true;
                                    }
                                    return false;
                                });
                                if (!qU(subObj)) {
                                    if (defSection != subObj.id) {
                                        defTab = null;
                                    }
                                    defSection = subObj.id;
                                    if (subs.length > 1) {
                                        var tabObj = subObj.tabs.find(function(d, i) { return (subs[1] == d.id) ? true : false; });
                                        if (!qU(tabObj)) {
                                            defTab = tabObj.id;
                                        }
                                    } else {
                                        defTab = subObj.tabs[0].id;
                                    }
                                }
                            }
                        }

                        if (!qU(_this.onLoad)) {
                            _this.app.onLoad(_this, defSection, defTab);
                        }
                        _this.change(defSection, defTab);
                    }

                }
            });
            tab.active = (ti == 0) ? true : false;
        });
    });
    this.slider = function() {
        var index = this.option.contents.reduce(function(prev, curr, i) {
            if (prev < 0 && !qU(curr.active) && curr.active == true) {
                return i;
            }
            return prev;
        }, -1);

        if (index >= 0 && index < this.option.contents.length) {
            index = (index + 1) % this.option.contents.length;
        } else { index = 0; }

        var sectionId = this.option.contents[index].id;

        var tabId = !qU(this.option.contents[index].tabs) ? this.option.contents[index].tabs.reduce(function(tab) { if (!qU(tab.active) && tab.active == true) { return true; } return false; }) : undefined;
        this.change(sectionId, tabId);
    }
    this.change = function(sectionId, tabId) {
        var section = this;
        var $sectionTab = $("#" + this.option.tabId);
        this.option.contents.forEach(function(d) { d.active = false; })
        var selectContent = this.option.contents.find(function(d, i) {
            if (d.id == sectionId)
                return true;
            return false;
        });

        if (!qU(selectContent)) {
            selectContent.active = true;

            $sectionTab.find("." + this.option.tabTitleClass).text(selectContent.name);
            var ul = $sectionTab.find("ul");
            ul.empty();
            var activeTabId;
            if (!qU(tabId)) {
                if (selectContent.tabs.some(function(d) { return d.id == tabId ? true : false; })) {
                    activeTabId = tabId;
                } else if (!selectContent.tabs.some(function(d) { if (!qU(d.active) && d.active == true) { activeTabId = d.id; return true; } return false; })) {
                    selectContent.tabs.some(function(d) { activeTabId = d.id; return true; });
                }
            } else {
                if (!selectContent.tabs.some(function(d) { if (!qU(d.active) && d.active == true) { activeTabId = d.id; return true; } return false; })) {
                    selectContent.tabs.some(function(d) { activeTabId = d.id; return true; });
                }
            }
            selectContent.tabs.forEach(function(tab, itab) {
                var active = !qU(activeTabId) ? ((tab.id == activeTabId) ? "class='on'" : "") : ((itab == 0) ? "class='on'" : "");
                ul.append("<li data-content='" + tab.id + "' " + active + "><a href='#'>" + tab.name + "</a></li>");
                if (active.length > 0) {
                    section.activeContent(tab);
                }
            });

            $("#" + this.option.tabId + ">ul>li").each(function() {
                $(this).on('click', function() {
                    var content = $(this).data("content");
                    var tab = section.findTab(content);
                    if (typeof(tab) != "undefined" && tab != null) {
                        section.activeContent(tab);
                    }
                });
            });
            /*	
            	selectContent.tabs.some(function(tab,itab){
            		if(tab.active == true){
            			section.activeContent(tab);
            			return true;
            		}
            		return false;
            	});
            	*/
        }
    }
    this.findTab = function(tabid) {
        var findObj;
        this.option.contents.some(function(content, i) {
            if (content.tabs.some(function(tab, ti) {
                    if (tab.id == tabid) {
                        findObj = tab;
                        return true;
                    }
                    return false;
                })) {
                return true;
            }

            return false;
        });
        return findObj;
    }
    this.activeContent = function(tab) {
        var $li = $("#" + this.option.id + " li[data-content=" + tab.id + "]");
        var $allLi = $("#" + this.option.tabId + ">ul>li");

        $li.addClass("on");
        $li.siblings().removeClass("on");

        //var content = $(this).data("content");
        $("#" + this.option.id + " ." + this.option.tabContentClass).hide();
        $("#" + this.option.id + " [data-content=" + tab.id + "]").show();
        /*
        $allLi.each(function(i,d){
        	var tabId = $(d).data("content");
        	if( tabId == tab.id ){
        		tab.active = true;
        	}else{
        		tab = _this.findTab(tabId);
        		if( !qU(tab) ){
        			tab.active = false;
        		}
        	}
        });*/
        if (!qU(tab.parent)) {
            tab.parent.tabs.forEach(function(d, i) {
                d.active = false;
            });
        }
        tab.active = true;

        var ontab = $("[data-content=" + tab.id + "] .left_tab>ul>li.on");
        if (ontab.length > 0) {
            if ($(ontab[0]).data('focus') == "refresh") {
                $(ontab[0]).trigger('click');
            }
        }
        var sels = $("[data-content=" + tab.id + "] .columnpart");
        if (sels.length > 0) {
            sels = $("[data-content=" + tab.id + "] .columnpart.on .tab_list.on>li.on");
            if (sels.length > 0) {
                $(sels[0]).trigger('click');
            } else {
                sels = $("[data-content=" + tab.id + "] .columnpart.on .tab_small>li.on");
                if (sels.length > 0) {
                    $(sels[0]).trigger('click');
                }
            }
        } else {
            sels = $("[data-content=" + tab.id + "] .tab_list.on>li.on");
            if (sels.length > 0) {
                $(sels[0]).trigger('click');
            } else {
                sels = $("[data-content=" + tab.id + "] .tab_small>li.on");
                if (sels.length > 0) {
                    $(sels[0]).trigger('click');
                }
            }
        }

        var onradio = $("[data-content=" + tab.id + "] input[type=radio][checked=checked]");
        if (onradio.length > 0) {
            $(onradio[0]).trigger('click');
        }
        if (!qU(application)) {
            application.alive();
        }

    }

    if (!qU(this.option.sectionHandleId)) {
        $("#" + this.option.sectionHandleId).bind("click", function() {
            animateSidebar();
        });
    }
}