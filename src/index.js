global.Cesium = require('cesium/Cesium');
/*require('./css/main.css');*/
require('cesium/Widgets/widgets.css');

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjMyZDgyMS1lMGUzLTRkNmUtYWMzNS1lNzcxMDE1NGQ1NWYiLCJpZCI6MjE4NjIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5OTY1NjR9.SFdCmlB5cqZjQz8hv6S5ub2ik71BrbsgXWt_8P9C0ls';

var { load, pos } = require('./sample.js');

global.viewer = new Cesium.Viewer('map', {
    //디폴트 레이어로 World_TMS 설정
    /*
    imageryProvider: Cesium.createTileMapServiceImageryProvider({
        url: wUrl + '/World_TMS/',
        proxy: new Cesium.DefaultProxy(proxyUrl)
    }),
*/
    shadows: true,
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
    maximumRenderTimeChange: Infinity

});
var container = '<a href="http://www.bing.com"><img src="img/facility.png" title="Bing Imagery"/></a>';
//var credit = new Cesium.CreditDisplay(container, ' • ');
//var credit = new Cesium.Credit('Title', 'img/facility.png', 'http://www.cesiumjs.org');
//viewer.scene.frameState.creditDisplay.addDefaultCredit(credit)
//viewer.scene.frameState.creditDisplay.addCredit(new Cesium.Credit({ text: 'my other credit text' }));

load(viewer);
global.pos = pos;