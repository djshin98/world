var fs = require("fs");

class FileWatcher{
    constructor(options){
        this.options = Object.assign({folder:'.'},options);
        let _this = this;
        fs.watch(this.options.folder, function (event, filename) {

            console.log('***************************************');
            console.log('event is: ' + event + "( " + filename + " )");
        
            if (filename) {
                let path = _this.options.folder + "/" + filename;
                if( _this.options.watch ){
                    if( event == "rename" ){
                        if( fs.existsSync(path) ){
                            let base64 = "data:image/jpeg;base64," + _this.base64_encode( path );
                            _this.options.watch( filename , 'add', base64 );
                        }else{
                            _this.options.watch( filename , 'del');
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
        var bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    }
}

module.exports = { FileWatcher : FileWatcher };
