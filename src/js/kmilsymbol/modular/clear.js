    /*const bearingBetween = require("../geometry/bearingbetween");
    const pointBetween = require("../geometry/pointbetween");
    const toDistanceBearing = require("../geometry/todistancebearing");

    function clear(feature) {
      //var direction, width;
      var annotations = [{}];

      var points = feature.geometry.coordinates;
      var geometry = { type: "MultiLineString" };
      var scale = distanceBetween(points[0], points[1]);

      geometry.coordinates = [];

      var geom = [points[0], points[1]];
      geometry.coordinates.push(geom);

      var pMid = pointBetween(points[0], points[1], 0.5);
      var length = distanceBetween(pMid, points[2]);
      var bearing = bearingBetween(points[0], points[1]);

      geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
      geometry.coordinates.push(geom);

      annotations[0].geometry = { type: "Point" };
      annotations[0].properties = {};
      annotations[0].properties.text = "C";
      annotations[0].geometry.coordinates = pointBetween(
        pMid,
        geom[1],
        0.5
      );

      geom = [];
      geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
      geom.push(pMid);
      geom.push(
        toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
      );
      geometry.coordinates.push(geom);

      pMid = pointBetween(points[0], points[1], 0.2);
      geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
      geometry.coordinates.push(geom);

      geom = [];
      geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
      geom.push(pMid);
      geom.push(
        toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
      );
      geometry.coordinates.push(geom);

      pMid = pointBetween(points[0], points[1], 0.8);
      geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
      geometry.coordinates.push(geom);

      geom = [];
      geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
      geom.push(pMid);
      geom.push(
        toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
      );
      geometry.coordinates.push(geom);

      return { geometry: geometry, annotations: annotations };
    }

    module.exports = clear;
    */

    const { calc } = require("../graphics/math");

    function clear(turnPlane, properties, bcompleted) {
        return turnPlane.map((prev, points, index, buffer) => {
          if(index == 0) {
            if(points[2]){
           
            let gap = calc.distance(points[0], points[1])/8;
            let mid = calc.mid(points[0], points[1]);
          
            let p1 = {x: 0, y: points[1].y - gap};
            let p2 = {x: 0, y: mid.y};
            let p3 = {x: 0, y: points[0].y + gap};   

            let e1 = {x: points[2].x, y: points[1].y - gap};
            let e2 = {x: points[2].x, y: mid.y};
            let e3 = {x: points[2].x,  y: points[0].y + gap};

            let a1 = calc.arrow(turnPlane, e1, p1, properties.pixelBySize.arrow);
            let a2 = calc.arrow(turnPlane, e2, p2, properties.pixelBySize.arrow);
            let a3 = calc.arrow(turnPlane, e3, p3, properties.pixelBySize.arrow);

          return [{
                    type: "polyline",
                    geometry: [
                      points[0], points[1]
                    ], 
                },
              {
                type: "polyline", 
                geometry: [
                  e2, p2
               ]
              }, {
                type: "polyline", 
                geometry: [
                  e1, p1
                ]
              }, {
                type: "polyline", 
                geometry: [
                  e3, p3
                ]
              }, {
                type: "polyline", 
                geometry: a1.geometry
              }, {
                type: "polyline", 
                geometry: a2.geometry
              }, {
                type: "polyline",
                geometry: a3.geometry
              }];
            }
          }    
        }).end();
          
    }


    module.exports = { 
      modular: clear, 
      minPointCount: 2, 
      maxPointCount: 3, 
      properties: {
        size: {
            arrow: 50,
            tail: 50,
        },
        pixelBySize: {}
    }
    };