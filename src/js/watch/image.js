var fs = require("fs");

const extNames = [".png",".jpg",".jpeg",".gif"];
const extTypes = ["data:image/png;base64,",
                "data:image/jpeg;base64,",
                "data:image/jpeg;base64,",
                "data:image/gif;base64,"];
                
exports.base64_encode = function(file){
    if( file ){
        let lowfile = file.toLowerCase();
        let index = lowfile.lastIndexOf(".");
        if( index > 0 ){
            let iext = extNames.indexOf( lowfile.substr(index) );
            if( iext >= 0 ){
                var bitmap = fs.readFileSync(file);
                return extTypes[iext] + Buffer.from(bitmap).toString('base64');
            }
        }
    }
};
