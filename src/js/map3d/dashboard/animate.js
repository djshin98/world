const d3 = require('d3');
const { Group } = require('./group');
class Animate extends Group {
    constructor(dashboard, options) {
        super(dashboard, options);
        let _this = this;
        this.play = 0;
    }
    isPlay() {
        return this.play;
    }
    pause() {
        this.play = 0;
    }
    play(speed) {
        this.play = speed ? speed : 1;
    }
    refresh() {
        super.refresh();
        // set the dimensions and margins of the graph
        var margin = { top: 2, right: 2, bottom: 2, left: 2 },
            width = 44 - margin.left - margin.right,
            height = 44 - margin.top - margin.bottom;

        this.width(width + (margin.left + margin.right));
        this.height(height + (margin.top + margin.bottom));

        //Read the data

        this.playButton = this.svg.append("g")
            .attr("width", width).attr("height", height)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        this.circle = this.playButton.append("circle").attr("class", "animate-circle")
            .attr("cx", 21).attr("cy", 21).attr("r", 20)
            .attr("stroke-dasharray", 314).attr("stroke-dashoffset", 0);

        this.pauseLine = this.playButton.append("line").attr("class", "animate-pause-line").style("stroke", "white")
            .attr("x1", 15).attr("y1", 11).attr("x2", 15).attr("y2", 31);
        this.playLine = this.playButton.append("path").attr("class", "animate-pause-line")
            .attr("rx", 10).attr("ry", 10).attr("d", "M 27 11 L 27 21 L 27 31");

        let _this = this;
        this.circle.on("click", function() {
            if (_this.isPlay()) {
                _this.playLine.transition().duration(300)
                    .attr("d", "M 27 11 L 27 21 L 27 31");
                _this.circle.transition().duration(1300).attr("class", "animate-circle");
                _this.play = 0;
            } else {
                _this.playLine.transition().duration(300)
                    .attr("d", "M 15 11 L 27 21 L 15 31");
                _this.circle.transition().duration(1300).attr("class", "animate-circle play");
                _this.play = 1;
            }
        });
        /*        
        <svg width="104" height="104" id='pause'>
                <circle id="circle" cx="21" cy="21" r="20" stroke-dasharray="314" stroke-dashoffset="0" style="stroke-width:2px;stroke:white;" />
                <line id='line1' x1="15" y1="11" x2="15" y2="31" style="stroke-width:4px;stroke:white;stroke-linecap: round;" />
                <path id='line2' d="M 27 11 L 27 21 L 27 31" rx="10" ry="10" style="stroke-width:4px;stroke:white;fill:white;stroke-linejoin: round;stroke-linecap: round;">
                    <animate
                        attributeName="d"
                        dur="300ms"
                        from="M 27 11 L 27 21 L 27 31"
                        to="M 15 11 L 27 21 L 15 31"
                        begin="indefinite"
                        fill="freeze"
                        id="from_pause_to_play"
                    />
                </path>
                <animate
                    xlink:href="#line2"
                    attributeName="d"
                    dur="300ms"
                    from="M 15 11 L 27 21 L 15 31"
                    to="M 27 11 L 27 21 L 27 31"
                    fill="freeze"
                    id="from_play_to_pause"
                    begin="indefinite"
                />
        */
    }
    update(speed) {

    }
}

module.exports = { Animate: Animate };