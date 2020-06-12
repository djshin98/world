var d3 = require('d3');

class SvgToImage {
    constructor() {
        //this.name = "function";
    }
    svgtoimage(text) {
        var template
        if (document.getElementsByTagName('template').length == 0) {
            template = document.createElement('template');
        } else {
            template = document.getElementsByTagName('template')[0];
        }

        template.innerHTML = "#document-fragment";
        document.body.appendChild(template);

        var r = d3.selectAll("svg");
        //r.remove();
        var html = d3.selectAll("template").append("svg").attr('width', '500')
            .attr('height', '500').append('g').style('font-color', 'black');

        var rect = html.append("rect").attr('x', '50').attr('y', '50')
            .attr('rx', '20').attr('ry', '20').attr('width', '200').attr('height', '100')
            .style('fill', 'skyblue');

        html.append('text').text(text).attr("x", "135").attr("y", "110")
            .attr("font-size", "20px").attr("fill", "black");

        //html.append("text").text("displayMeter" + "m");
        var path = html.append("path");

        var data = [{ x: 150, y: 149 },
            { x: 170, y: 149 },
            { x: 160, y: 180 }
        ];



        var lineFunction = d3.line().x(function(d) { return d.x; }).y(function(d) { return d.y; });


        path
            .attr("d", lineFunction(data))
            .attr("fill", "skyblue");


        var svg = document.querySelector('template');
        svg = svg.firstChild;
        //svg = svg.getElementsByTagName("svg").innerHTML;
        //svg = svg.innerHTML;
        var xml = new XMLSerializer().serializeToString(svg);
        var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
        var b64start = 'data:image/svg+xml;base64,';
        var image64 = b64start + svg64;
        return image64;


    };


}
module.exports = { SvgToImage: SvgToImage };