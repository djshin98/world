class Marker{
    constructor(){

    }
    update(viewModel) {
        var sel = this.viewModels.filter(d => { let v = d.val(); return (v != undefined && v != "") ? true : false; });
        var option = sel.reduce((prev, curr) => { prev[curr.dataKey()] = curr.val(); return prev }, {});
        if (option.sic && option.sic.length > 0) {
            var symbol = new ms.Symbol(option.sic, option);

            option.code = symbol.toDataURL();
            return this.template(option);
        }
    }
    template(option) {
        let imgData = option.code;
        option.category = "KMILSYMBOL";
        option.code = "";
        option.description = this.container.descriptionFromSIDC(option.sic);
        return '<img class="symbol-sm" data-option="'+encodeURIComponent(JSON.stringify(option))+'" ondragstart="app.dragger().drag(event)" src="' + imgData + '"/>';
    }
}
global.ViewModel_Marker = Marker;