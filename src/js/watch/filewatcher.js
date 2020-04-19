var fs = require("fs");
var {base64_encode} = require("./image");

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
                                    let base64 = base64_encode( f.path );
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
}

module.exports = { FileWatcher : FileWatcher };
