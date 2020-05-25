const d3 = require('d3');
const { Group } = require('./group');
class SlopeGraphBox extends Group {
    constructor(dashboard, options) {
        super(dashboard, options);
        this.data = [];
        let _this = this;
        this.slopeEvent = this.parent.map.listenEvent("slope", (v) => {
            if (v) {
                _this.data = v;
            } else {
                _this.data = [];
            }
            _this.update(_this.data);
        });
    }
    refresh() {
        super.refresh();
        // set the dimensions and margins of the graph
        var margin = { top: 20, right: 30, bottom: 30, left: 30 };
        let width = this.width() - margin.left - margin.right;
        let height = this.height() - margin.top - margin.bottom;

        this.graphSvg = this.svg.append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


        // Initialise a X axis:
        this.x = d3.scaleLinear().range([0, width]);
        this.xAxis = d3.axisBottom().scale(this.x);
        this.graphSvg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "myXaxis")

        // Initialize an Y axis
        this.y = d3.scaleLinear().range([height, 0]);
        this.yAxis = d3.axisLeft().scale(this.y);
        this.graphSvg.append("g")
            .attr("class", "myYaxis");
    }
    update(data) {
        // Create the X axis:
        let _this = this;
        this.data = data;
        this.x.domain([0, d3.max(data, function(d) { return d.x })]);
        this.graphSvg.selectAll(".myXaxis").transition()
            .duration(3000)
            .attr("color", "rgb(192,192,192)")
            .call(this.xAxis);

        // create the Y axis
        this.y.domain([0, d3.max(data, function(d) { return d.y })]);
        this.graphSvg.selectAll(".myYaxis")
            .transition()
            .attr("color", "rgb(192,192,192)")
            .duration(3000)
            .call(this.yAxis);

        // Create a update selection: bind to the new data
        var u = this.graphSvg.selectAll(".lineTest")
            .data([data], function(d) { return d.x });

        // Updata the line
        u.enter()
            .append("path")
            .attr("class", "lineTest")
            .merge(u)
            .transition()
            .duration(3000)
            .attr("d", d3.line()
                .x(function(d) { return _this.x(d.x); })
                .y(function(d) { return _this.y(d.y); }))
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
    }
    attribute() {
        let test = {
            General: [{
                key: "Graph",
                value: "Line Graph"
            }, {
                key: "Your Name",
                value: "Djshin"
            }],
            Properties: this.data.map(d => {
                return {
                    key: d.x,
                    value: d.y
                };
            })
        };
        this.fireEvent("attributes", test);
    }
}

module.exports = { SlopeGraphBox: SlopeGraphBox };