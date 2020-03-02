import { IxDatabase } from "./db";
global.mydb = new IxDatabase(1);

var { dom, get, post } = require("./comm");
var { Section } = require("./section");
global.windowLayout = {
    header: {
        height: 40
    },
    section: {
        getWidth: function() {
            if (windowLayout.section.visible) {
                if (windowLayout.section.view.visible) {
                    return windowLayout.section.width;
                }
                return windowLayout.section.width - windowLayout.section.view.width;
            } else {
                return 0;
            }
        },
        width: 300,
        visible: true,
        view: {
            width: 225,
            visible: true
        },
        handle: {
            height: 50
        }
    }
}
global.section = new Section({
    contents: [
        { name: "Home", icon: "home", page: "section/home.html" },
        { name: "위치검색", icon: "search", page: "section/search.html" },
        { name: "3d Map", icon: "map", page: "section/map.html" },
        { name: "공역", icon: "fighter jet", page: "section/flight-area.html" },
        { name: "군대부호", icon: "object ungroup", page: "section/milsymbol.html" }
    ],
    onload: function(parentNode, data) {
        $(data).each(function(i, d) {
            $(parentNode).append(d);
        });
    }
});

global.dom = dom;
global.tx = { get: get, post: post };

// 객체를 만들때 고민
// 1. singleton or not 
window.onresize = function() {
    var width = windowLayout.section.getWidth();
    var headerHeight = windowLayout.header.height;
    var handleHeight = windowLayout.section.handle.height;

    var sectionView = dom.$("section")[0];
    var sectionHandle = dom.$("#door-handle")[0];
    var article = dom.$("article")[0];
    var header = dom.$("header")[0];
    var map = dom.$("#map3d")[0];
    var viewWidth = window.innerWidth;
    var viewHeight = window.innerHeight;
    var bodyHeight = viewHeight - headerHeight;

    header.style.top = "0px";
    header.style.width = viewWidth + "px";
    header.style.height = headerHeight + "px";

    sectionView.style.top = headerHeight + "px";
    sectionView.style.width = width + "px";
    sectionView.style.height = bodyHeight + "px";

    sectionHandle.style.top = ((bodyHeight / 2) - (handleHeight / 2)) + "px";

    article.style.top = headerHeight + "px";
    article.style.left = width + "px";
    article.style.width = (viewWidth - width) + "px";
    article.style.height = bodyHeight + "px";

    map.style.height = bodyHeight + "px";

    if (windowLayout.section.view.visible) {
        section.resize(width, bodyHeight);
    }
}

window.onresize();

dom.$("#door-handle")[0].onclick = function(e) {
    windowLayout.section.view.visible = !$(".section-view").is(":visible");
    $(".section-view").transition('fade right');
    window.onresize();
};
global.Cesium = require('cesium/Cesium');
/*require('./css/main.css');*/
require('cesium/Widgets/widgets.css');

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjMyZDgyMS1lMGUzLTRkNmUtYWMzNS1lNzcxMDE1NGQ1NWYiLCJpZCI6MjE4NjIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5OTY1NjR9.SFdCmlB5cqZjQz8hv6S5ub2ik71BrbsgXWt_8P9C0ls';

var { load, pos } = require('./sample.js');

global.viewer = new Cesium.Viewer('map3d', {
    //디폴트 레이어로 World_TMS 설정
    /*
    imageryProvider: Cesium.createTileMapServiceImageryProvider({
        url: wUrl + '/World_TMS/',
        proxy: new Cesium.DefaultProxy(proxyUrl)
    }),
*/
    shadows: false,
    scene3DOnly: true, //3차원 화면으로 구성 // ,
    //sceneMode: Cesium.SceneMode.SCENE2D, //2차원 화면으로 구성
    animation: false, //MS BingMap Service 제한하여 불필요한 URL 호출 막음
    baseLayerPicker: false,
    geocoder: false,
    vrButton: false,
    homeButton: false,
    infoBox: false, //객체 선택 시 상세정보 표시 기능 활성화
    sceneModePicker: false,
    selectionIndicator: false,
    creditsDisplay: false,
    //creditContainer: false,
    fullscreenButton: false,
    timeline: false,
    navigationHelpButton: false,
    terrainExaggeration: 1.0, //고도 기복 비율 조정
    shouldAnimate: true, //새로추가.. 눈 비 안개를위한 20181005
    requestRenderMode: true, //throttled이 false이면 매번 화면 갱신으로 FPS 값이 표시됨
    maximumRenderTimeChange: Infinity,
    navigationInstructionsInitiallyVisible: false,
    skyBox: new Cesium.SkyBox({}),
    skyAtmosphere: new Cesium.SkyAtmosphere(),

});

function addKeyboardShortcuts() {
    const zoomAmount = 15,
        rotateAmount = 5;
    document.addEventListener('keydown', e => {
        // 87 -> W
        // 65 -> A
        // 83 -> S
        // 68 -> D
        // 38 -> up
        // 37 -> left
        // 40 -> down
        // 39 -> right
        // 81 -> Q
        // 69 -> E
        // 107 -> + (add)
        // 109 -> - (sub)
        switch (e.keyCode) {
            case 87:
            case 38:
                viewer.camera.moveForward(rotateAmount);
                break;
            case 81:
                viewer.camera.moveUp(rotateAmount);
                break;
            case 69:
                viewer.camera.moveDown(rotateAmount);
                break;
            case 65:
            case 37:
                viewer.camera.moveLeft(rotateAmount);
                break;
            case 83:
            case 40:
                viewer.camera.moveBackward(rotateAmount);
                break;
            case 68:
            case 39:
                viewer.camera.moveRight(rotateAmount);
                break;
            case 107:
                viewer.camera.zoomIn(zoomAmount);
                break;
            case 109:
                viewer.camera.zoomOut(zoomAmount);
                break;
        }
    });
}
addKeyboardShortcuts();

//const commandOpts = {};
//commandOpts.enableDistanceLegend = false;
//viewer.extend(Cesium.viewerCesiumNavigationMixin, commandOpts);
//var container = '<a href="http://www.bing.com"><img src="img/facility.png" title="Bing Imagery"/></a>';
//var credit = new Cesium.CreditDisplay(container, ' • ');
//var credit = new Cesium.Credit('Title', 'img/facility.png', 'http://www.cesiumjs.org');
//viewer.scene.frameState.creditDisplay.addDefaultCredit(credit)
//viewer.scene.frameState.creditDisplay.addCredit(new Cesium.Credit({ text: 'my other credit text' }));

load(viewer);
global.pos = pos;