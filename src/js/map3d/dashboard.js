class DashBoard{
    constructor(options){
        update(options);
    }
    update(options){
        this.options = Object.assign({},options);
        this.create();
    }
    create(){
        let svg = document.getElementById(this.options.id);
        if( this.options.center ){

        }
    }
}