var d3 = require('d3');



class Tooltip {
    constructor(options) {
        
    }
    static base64image(options){
        this.options = Object.assign({
            text: "Hello",
            backgroundColor: "#ddd",
            color: "black",
            strokeColor: "black",
            border: 2,
            fontSize: 12,
            bold: false,
            fontFamily: "굴림",
            tailHeight: 30,
            tailWidth: 10,
            outlineWidth: 1,
            textLineMargin: 4,
            taildirection: "bottom",
            offset: 0,
            degree: 90
        }, options);

        var textFont = this.options.bold == true ? "bold " + this.options.fontSize + "px " + this.options.fontFamily : this.options.fontSize + "px " + this.options.fontFamily;
        var textWidth = 0;
        var textHeight = 0;
        var multipleLine = false;
        if (this.options.text.indexOf("\n") > 0) {
            multipleLine = true;
            var texts = this.options.text.split("\n");
            textWidth = texts.reduce((prev, curr) => {
                return Math.max(prev, this.getTextWidth(curr, textFont))
            }, 0);
            textHeight = this.options.fontSize * texts.length + this.options.textLineMargin * (texts.length - 1);
        } else {
            textWidth = this.getTextWidth(this.options.text, textFont);
            textHeight = this.options.fontSize;
        }
        var padding = {
            left: this.options.fontSize / 2,
            top: this.options.fontSize / 2,
            right: this.options.fontSize /2,
            bottom: this.options.fontSize,
        }
        var border = this.options.border;

        var box = {
            width:0,
            height:0
        }

        if(this.options.taildirection == "bottom" || this.options.taildirection == "top" ) {
            box.width = border * 2 + padding.left + padding.right + textWidth 
            box.height = border * 2 + padding.top + padding.bottom + textHeight + this.options.tailHeight 
            
        }else if(this.option.taildirection == "left" || this.options.taildirection == "right") {
            box.width = border * 2 + padding.left + padding.right + textWidth + this.options.outlineWidth * 2 +this.options.tailHeight
            box.height = border * 2 + padding.top + padding.bottom + textHeight + this.options.outlineWidth * 2
        }
        
        /*var box = {
            width: border * 2 + padding.left + padding.right + textWidth + this.options.outlineWidth * 2,
            height: border * 2 + padding.top + padding.bottom + textHeight + this.options.tailHeight + this.options.outlineWidth * 2
        }
        */
       /*
        var html = d3.selectAll("body")
            .append("svg")
            .attr('width', box.width)
            .attr('height', box.height)
            .append('g');
        */

        var template
        if(document.getElementsByTagName('template').length == 0){
            template = document.createElement('template');
        }
        else{
            template = document.getElementsByTagName('template')[0];
        }
        
        template.innerHTML = "#document-fragment";
        document.body.appendChild(template);

        var r = d3.selectAll("svg");
        r.remove();
       
       

        var html = d3.selectAll("template")
        .append("svg")
        .attr('width', box.width)
        .attr('height', box.height)
        .append('g');

        
        var path1 = html.append('g');
        var path2 = html.append('g');
        var path3 = html.append('g');
        var path4 = html.append('g');

        /*
        var rect = html.append("rect")
            .attr('x', this.options.outlineWidth)
            .attr('y', this.options.outlineWidth)
            .attr('rx', this.options.fontSize / 2)
            .attr('ry', this.options.fontSize / 2)
            .attr('width', box.width - (this.options.outlineWidth * 2))
            .attr('height', box.height - this.options.tailHeight)
            .attr("stroke", this.options.strokeColor)
            .attr("stroke-width", this.options.outlineWidth)
            .style('fill', this.options.backgroundColor);
        */
        if (multipleLine) {
            var texts = this.options.text.split("\n");
            texts.forEach((text, i) => {
                html.append('text').text(text).attr("x", box.width / 2)
                    .attr("y", this.options.outlineWidth + padding.top + (i + 1) * (this.options.fontSize) + i * this.options.textLineMargin)
                    .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                    .attr("font-family", this.options.fontFamily)
                    .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
            });
        } else {
            html.append('text').text(this.options.text).attr("x", box.width / 2).attr("y", (box.height - this.options.tailHeight - padding.bottom / 2))
                .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                .attr("font-family", this.options.fontFamily)
                .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
        }


        var path = html.append("path");


        /*
        var arc1 = d3.arc()
        .innerRadius(9)
        .outerRadius(10)
        .startAngle(270)
        .endAngle(360);

        var arc2 = d3.arc()
        .innerRadius(9)
        .outerRadius(10)
        .startAngle(0)
        .endAngle(Math.PI);

        var arc3 = d3.arc()
        .innerRadius(9)
        .outerRadius(10)
        .startAngle(0)
        .endAngle(Math.PI);

        var arc4 = d3.arc()
        .innerRadius(9)
        .outerRadius(10)
        .startAngle(0)
        .endAngle(Math.PI);
        */

        var data = [{
            
            x: box.width / 2 - this.options.tailWidth / 2,
            y: box.height - this.options.tailHeight // - (this.options.outlineWidth)
        }, {
            x: box.width / 2,
            y: box.height
        }, {
            x: box.width / 2 + this.options.tailWidth / 2,
            y: box.height - this.options.tailHeight // - (this.options.outlineWidth)
        },
        
        ];

        /*
        var lineFunction = d3.svg.line().x(function(d) {
            return d.x;
        }).y(function(d) {
            return d.y;
        }).interpolate("linear");
        */

        /*
        path.attr("d", lineFunction(data))
        //.attr("stroke", this.options.strokeColor)
        .attr("fill", this.options.backgroundColor);
        */
        
        let startAngle = 360;
        let endAngle = 270;
        let arc = [];
        //let arcPoint = [];
       // path.attr('transform', 'translate(' + 10 + ', ' + 10 + ')')
       //path = path.append('path');
        //path.attr("d", this.d3arc(startAngle, endAngle));
        for(let i = 0; i < 4; i++){
            if(startAngle < 0){
                startAngle = 360;
            }
            if(endAngle < 0){
                endAngle = 360;
            }
            
            arc[i] = this.d3arc(startAngle * Math.PI / 180, endAngle * Math.PI / 180);
            startAngle -= 90;
            endAngle -= 90;
        }


        let speechHeight = border * 2 + padding.top + padding.bottom + textHeight + this.options.outlineWidth * 2;
        let speechWidth = border * 2 + padding.left + padding.right + textWidth + this.options.outlineWidth * 2;

        path1.attr('transform', 'translate(' + 10 + ', ' +  10 + ')')
        path1 = path1.append('path');
        path1.attr("d", arc[0]);

        path2.attr('transform', 'translate(' + (box.width - 10) + ', ' + 10 + ')')
        path2 = path2.append('path');
        path2.attr("d", arc[3]);

        path3.attr('transform', 'translate(' + (box.width - 10) + ', ' + (speechHeight - 10) + ')')
        path3 = path3.append('path');
        path3.attr("d", arc[2]);

        path4.attr('transform', 'translate(' + 10 + ', ' + (speechHeight - 10) + ')')
        path4 = path4.append('path');
        path4.attr("d", arc[1]);

        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", 10)    
        .attr("y1", 0)      
        .attr("x2", box.width - 10)     
        .attr("y2", 0);

       

        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", 0)    
        .attr("y1", 10)      
        .attr("x2", 0)     
        .attr("y2", speechHeight - 10);

        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", box.width)    
        .attr("y1", 10)      
        .attr("x2", box.width)     
        .attr("y2", speechHeight - 10);
        

        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", 0 +10)    
        .attr("y1", speechHeight - 0.5)      
        .attr("x2", speechWidth/2 - this.options.tailWidth/2 - this.options.offset)     
        .attr("y2", speechHeight - 0.5);

        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", speechWidth -10)    
        .attr("y1", speechHeight - 0.5)      
        .attr("x2", speechWidth/2 + this.options.tailWidth/2 + this.options.offset)     
        .attr("y2", speechHeight - 0.5);


        html.append("line")          
        .style("stroke", this.options.strokeColor)
        .attr("x1", data[0].x)    
        .attr("y1", data[0].y -0.8)      
        .attr("x2", data[1].x)     
        .attr("y2", data[1].y); 

        html.append("line")          
        .style("stroke", this.options.strokeColor)  
        .attr("x1", data[2].x)     
        .attr("y1", data[2].y -0.8)      
        .attr("x2", data[1].x)    
        .attr("y2", data[1].y);

        var svg = document.querySelector('template');
        svg = svg.firstChild;
        //svg = svg.getElementsByTagName("svg").innerHTML;
        //svg = svg.innerHTML;
        var xml = new XMLSerializer().serializeToString(svg);
        var svg64 = btoa(unescape(encodeURIComponent(xml))); //for utf8: btoa(unescape(encodeURIComponent(xml)))
        var b64start = 'data:image/svg+xml;base64,';
        var image64 = b64start + svg64;
        return image64;
    }

    static getTextWidth(text, font) {
        // re-use canvas object for better performance
        var canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    }
    static d3arc(startAngle, endAngle) {
         
        let arc = d3.arc()
        .innerRadius(10-1)
        .outerRadius(10)
        .startAngle(startAngle)
        .endAngle(endAngle);

    return arc;
   }
}

module.exports = { Tooltip: Tooltip };