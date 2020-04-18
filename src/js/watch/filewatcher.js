var fs = require("fs");

const extNames = [".png",".jpg",".jpeg",".gif"];
const extTypes = ["data:image/png;base64,",
                "data:image/jpeg;base64,",
                "data:image/jpeg;base64,",
                "data:image/gif;base64,"];

class FileWatcher{
    constructor(options){
        this.options = Object.assign({folder:'.'},options);
        this.fileWatchs = [];
        let _this = this;
        fs.watch(this.options.folder, function (event, filename) {

            console.log('***************************************');
            console.log('event is: ' + event + "( " + filename + " )");
        
            if (filename) {
                let path = _this.options.folder + "/" + filename;
                if( _this.options.watch ){
                    if( event == "rename" ){
                        
                        if( fs.existsSync(path) ){
                            
                        }else{
                            _this.fileWatchs = _this.fileWatchs.filter(f=>{ return f.path == path ? false : true; });
                            console.log('del ' + path );
                            _this.options.watch( filename , 'del');
                        }
                    }else if( event == "change" ){
                        if( fs.existsSync(path) ){
                            var stats = fs.statSync(path);
                            var fileSizeInBytes = stats["size"];
                            console.log( "size : " + fileSizeInBytes);

                            if( _this.handler ){
                                clearTimeout(_this.handler);
                                _this.handler = undefined;
                            }
                            if( !_this.fileWatchs.some(f=>{ return f.path == path ? true : false; }) ){
                                _this.fileWatchs.push({path:path,size:fileSizeInBytes});
                            }
                            _this.handler = setTimeout(function(){
                                _this.fileWatchs.forEach(f=>{
                                    let base64 = _this.base64_encode( f.path );
                                    if( base64 ){
                                        _this.options.watch( f.path , 'add', base64 );
                                        console.log( "send : " + f.path + " , size : " + f.size);
                                    }
                                });
                                _this.fileWatchs = [];
                            },1000);
                        }
                    }
                }
                //console.log('filename provided: ' + filename);
            } else {
                //console.log('filename not provided');
            }
        
        });
    }

    base64_encode(file) {
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
    }
}

module.exports = { FileWatcher : FileWatcher };
