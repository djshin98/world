function DrawGeodeticGrid(viewer, displayLongitude, displayLatitude, gridInterval)
{
    var czml = [ {
	        "id" : "document",
	        "name" : "CZML Geodectic Grid",
	        "version" : "1.0"
    }];

    var i, j, id = 0;
    var pointsLat = []; 

    for ( j = -89.9; j < 90; j+=gridInterval ) {
        var latPoints = [];
        for ( i = 0; i <= 360; i+=gridInterval ) {
            latPoints.push( i );
            latPoints.push( j );
            latPoints.push( 500 ); //����
        } 
        pointsLat.push( latPoints );
    }

    for (i = 0; i < pointsLat.length; i++) {
        czml.push( {
            "id": "GD" + id,
            "name" : "Geodetic line",
	
             "polyline" : {
                "positions" : {
                    "cartographicDegrees": pointsLat[i]
                },
				          
                "material": {
                    "polylineDash": {
                        "color": {
                            "rgba": [255, 255, 255, 125]
                        },
                        "dashLength": 8.0
                    }
                },

				"width": 0.5,
                //"zIndex": 100,
				//"clampToGround": true,
				//"disableDepthTestDistance": Number.POSITIVE_INFINITY,
				"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND,
			    }
            }		
		);
        id++;
    } 


    var pointsLon = [];

    for ( i = 0; i <= 360 ; i+=gridInterval ) {
      var longPoints = [];
      for ( j = -89.9; j < 90; j+=gridInterval ) {
          longPoints.push( i );
          longPoints.push( j );
          longPoints.push( 500 ); //����
      } 
      pointsLon.push( longPoints );
    }

    for (k = 0; k < pointsLon.length; k++) {
        czml.push({
            "id": "GD" + id,
            "name": "Geodetic line",

            "polyline": {
                "positions": {
                    "cartographicDegrees": pointsLon[k]
                },

                "material": {
                    "polylineDash": {
                        "color": {
                            "rgba": [255, 255, 255, 125]
                        },
                        "dashLength": 8.0
                    }
                },

                "width": 0.5,
                //"zIndex": 100,
                //"clampToGround": true,
                //"disableDepthTestDistance": Number.POSITIVE_INFINITY,
                "heightReference": Cesium.HeightReference.CLAMP_TO_GROUND,
            }
        }
		);
        id++;
    }
    

    var labelHeight = 0;

	for(i=0; i<180; i+=gridInterval) {
		czml.push({
				"id" : "LbE"+i,
				"name" : "Geodetic Label",
				"label" : {
					"font" : "8pt Arial",
					"horizontalOrigin" : "CENTER",
					"text" : "E " + String(i),
					"fillColor" : {
						"rgba" : [204, 166, 61, 255]
					},
					"pixelOffset": {
					    "cartesian2": [0, -20]
					},
				},
				 "position" : {
				 "cartographicDegrees": [i, displayLatitude, labelHeight]
				 },
				 "clampToGround": true
			}
		);
	}

	for(i=-180; i<0; i+=gridInterval) {
		czml.push({
				"id" : "LbW"+i,
				"name" : "Geodetic Label",
				"label" : {
					"font" : "8pt Arial",
					"horizontalOrigin" : "CENTER",
					"text" : "W" + String(i),
					"fillColor" : {
						"rgba" : [204, 166, 61, 255]
					},
					"pixelOffset": {
					    "cartesian2": [0, -20]
					},
				},
				 "position" : {
				 "cartographicDegrees": [i, displayLatitude, labelHeight]
				 },
				 "clampToGround": true
			}
		);
	}


	for(i=0; i<90; i+=gridInterval) {
		czml.push({
				"id" : "LbN"+i,
				"name" : "Geodetic Label",
				"label" : {
					"font" : "8pt Arial",
					"horizontalOrigin" : "CENTER",
					"text" : "N" + String(i),
					"fillColor" : {
						"rgba" : [204, 166, 61, 255]
					},
					"pixelOffset": {
					    "cartesian2": [0, -10]
					},
				},
				 "position" : {
				 "cartographicDegrees": [displayLongitude, i, labelHeight]
				 },
				 "clampToGround": true
			}
		);
	}

	for(i=-90; i<0; i+=gridInterval) {
		czml.push({
				"id" : "LbS"+i,
				"name" : "Geodetic Label",
				"label" : {
					"font" : "8pt Arial",
					"horizontalOrigin" : "CENTER",
					"text" : "S" + String(i),
					"fillColor" : {
						"rgba" : [204, 166, 61, 100]
					},
					"pixelOffset": {
					    "cartesian2": [0, -10]
					},					
				},
				 "position" : {
				 "cartographicDegrees": [displayLongitude, i, labelHeight]
				 },
				 "clampToGround": true
			}
		);
	}

    

    var sDataSource = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(sDataSource);
    
    return sDataSource;
    
}//end function


function f1(viewer){
   
    var flipY = false; // Some browsers seem to need this
    
    // Patch to show tile levels
    var imageryProvider = viewer.scene.imageryLayers._layers[0]._imageryProvider;
    imageryProvider._requestImage = imageryProvider.requestImage;
    imageryProvider.requestImage = function (x, y, level, request) {
        
        var ret = imageryProvider._requestImage(x, y, level, request);
        
        if (ret) {
          ret = ret.then(function (result) {
              var combine = document.createElement("canvas");
              combine.width = combine.height = 256;
    
              var ctx = combine.getContext("2d");
              ctx.save();
              if (flipY) {
                ctx.scale(1, -1);
                ctx.drawImage(result, 0, -256, 256, 256);
              } else {
                ctx.drawImage(result, 0, 0, 256, 256);
              }
              ctx.restore();
              ctx.font = "30px Verdana";
              ctx.fillText(String(level), 70, 160);
              ctx.lineWidth = 2;
              ctx.strokeRect(1, 1, 255, 255);
              return combine;
          });
        }else{
            //console.log("ret undefined");
        }
        
        return ret;
    };
    //viewer.scene.globe.maximumScreenSpaceError = 1;
    //viewer.scene.highDynamicRange = true;
    
    var locations = [];
    locations.push({
        text: 'San Francisco',
        onselect: function () {
            viewer.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(-122.44275646857872, 37.89935592106822, 1485.5524029413098),
                orientation: {heading: 3.702299188962694, pitch: -0.4667958778643242, roll: 6.278495733740854}
            });
        }
    });
    locations.push({
        text: 'Vancouver mountains',
        onselect: function () {
            viewer.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(-120.8332269596766, 48.38686167058759, 1552.5798252839177),
                orientation: {heading: 6.000164717073368, pitch: -0.36738206516438887, roll: 6.282185736657009}
            });
        }
    });
    
}
global.f1 = f1;
global.DrawGeodeticGrid = DrawGeodeticGrid;