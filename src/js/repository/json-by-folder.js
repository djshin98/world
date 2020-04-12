
var { IxDatabase } = require('./db');
const ITEM_CATEGORY = "item";
const LIST_URL = "list";

class JsonByFolder{
    constructor(category, fileCollection){
        this.db = new IxDatabase(2,category);
        this.category = category;
        this.folders = [];
        this.collection = fileCollection;
    }
    folder(callback){
        let _this = this;
        this.db.get(this.category,LIST_URL,function(result){
            if( result && result.value ){
                _this.folders = result.value;
                !callback || callback( result.value );
            }else{
                _this.folders = [];
                !callback || callback( [] );
            }
        });
    }
    guid() {
        function s4() { return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1); }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    save(path,callback){
        let obj = this.new(path);
        if( obj ){
            !this.collection || this.db.set(ITEM_CATEGORY,obj.id,this.collection.entities()); 
            this.db.set(this.category,LIST_URL,this.folders);
        }
        this.folder(callback);
    }
    new(path,callback){
        if( path && path.trim().length > 0 ){
            let paths = path.split("/").map(d=>{ return d.trim(); });
            paths = paths.filter(d=>{ return (d.length > 0) ? true : false; });
            let len = paths.length;
            let _this = this;
            let obj = paths.reduce(function(prev,curr,i){
                let obj = prev.find(function(d){ return d.name == curr ? true : false; });
                if( !obj ){
                    obj = { name : curr , id : _this.guid() };   
                    prev.push( obj );
                }
                if( len == i+1 ){
                    obj.type = "file";
                    return obj;
                }else{
                    obj.type = "folder";
                    if(!obj.children){obj.children = [];}
                    return obj.children;
                }
            },this.folders);
            !callback || callback(this.folders);
            return obj;
        }
    }
    _delete(arr){
        let _this = this;
        !arr || arr.forEach(d=>{
            _this._delete(d.children);
            _this.db.delete(ITEM_CATEGORY,d.id);
        });
    }
    delete(path,callback){
        if( path && path.trim().length > 0 ){
            let paths = path.split("/").map(d=>{ return d.trim(); });
            paths = paths.filter(d=>{ return (d.length > 0) ? true : false; });
            let len = paths.length;
            let obj = paths.reduce(function(prev,curr,i){
                if( prev ){
                    let obj = prev.find(function(d){ return d.name == curr ? true : false; });
                    if(obj && len == i+1){
                        let index = prev.findIndex(d=>{return (obj.id == d.id)?true:false; });
                        if( index >= 0 ){
                            prev.splice(index,1);
                        }
                        return obj;
                    }else if( obj ){
                        return obj.children;
                    }
                }
                return undefined;
            },this.folders);

            if( obj ){
                this._delete( obj.children );
                this.db.delete(ITEM_CATEGORY,obj.id);
                this.db.set(this.category,LIST_URL,this.folders);
            }
        }
        
        !callback || callback(this.folders);
    }
    open(id){
        let _this = this;
        this.db.get(ITEM_CATEGORY,id,function(result){
            if( result && result.value ){
                !_this.collection || _this.collection.open(result.value);
            }
        }); 
    }
}

module.exports = { JsonByFolder : JsonByFolder };




