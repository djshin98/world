class IxDatabase {
    constructor(version,name,store){
        this.databaseName="world";
        this.storeName="store";
        this.indexName="index";
        this.version=1;
        //this.open=undefined;
        
        this.init(version,name,store);
    }
    
    init(version,name,store){
		let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        !version || (this.version = version);
        !name || (this.databaseName = name);
        !store || (this.storeName = store);
		this.storeName =this.storeName;
        let open = indexedDB.open(this.databaseName, this.version);
        let _this = this;
		open.onupgradeneeded = function() {
		    let db = open.result;
            let store = db.createObjectStore(_this.storeName, {keyPath:['category','url']});
            store.createIndex("category", "category", { unique: false });
            store.createIndex("url", "url", { unique: false });
		    //var idurlIndex = store.createIndex("value", "value");
			console.log('create database : ' + _this.databaseName + "." +_this.version+"."+_this.storeName);
		};
		open.onsuccess = function() {
			console.log('opened database : ' + _this.databaseName + "." + _this.storeName + " (" + _this.version + ")");
        };
	}
	
	write(callback){
		let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
		let open = indexedDB.open(this.databaseName,this.version);
        //this.open = open;
        let _this = this;
		open.onsuccess = function() {
			let db = open.result;
			let tx = db.transaction(_this.storeName, "readwrite");
			let store = tx.objectStore(_this.storeName);	
            !callback || callback(store);
			tx.oncomplete = function() {
				db.close();
		    };
		};
		open.onerror = function(e){
			console.log("(write)open error");
		};
    }
    
	read(category,url,callback,error){
		let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
		let open = indexedDB.open(this.databaseName,this.version);
        //this.open = open;
        let _this = this;
		//open.onupgradeneeded = this.onupgradeneeded;
		open.onsuccess = function(result) {
			var db = open.result;
			var tx = db.transaction(_this.storeName, "readwrite");
			var store = tx.objectStore(_this.storeName);			
			/*
			 * 삭제  : tx.objectStore(_this.storeName).delete([IAUser.USER_ID,url,value]);
			 */
			var idurlIndex = store.get([category,url]);
			//var idurlIndex = store.getAll(); //전체 불러오기
			idurlIndex.onsuccess = function(e) {
				callback(idurlIndex);
		    };
		};
		//$("#result").append("read");
		open.onerror = function(e){
			!error || error();
			console.log("(read)open error");
		};
	}
	delete(category,url){
		this.write(function(store){
			var env = store.delete([category,url]);	
			env.onsuccess = function() {	
		        console.log('삭제 완료'); 
		    }; 
		});
	}
	set(category,url,value){
		this.write(function(store){
			var env = store.put({category:category ,url:url, value:value});	
			env.onsuccess = function() {	
		        //console.log('db입력완료'); 
		    }; 
		});
	}
	get(category,url,callback,error){
		this.read(category,url,function(idurlIndex){
            !callback || callback(idurlIndex.result);
		},function(){
            !error || error();
		});
	}
};

//IxDatabase.init(1);
module.exports = {
    IxDatabase: IxDatabase
}