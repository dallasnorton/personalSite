var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var i = 0;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

svg.append('text')
    .attr({
        'transform': function() {
            return 'translate(' + width / 2 + ',' + height / 2 + ')';
        },
        'fill': '#FFFFFF',
    })
    .style({
        'font-size': '20px',
        'pointer-events': 'none',
        'text-anchor': 'middle',
        'letter-spacing': '1px',
        'font-family': 'Open Sans',
        'font-style': 'normal'
    })
    .text('To be continued ...');

function particle() {
    var m = d3.mouse(this);

    svg.insert("circle", "rect")
        .attr({
            "cx": m[0],
            "cy": m[1],
            "r": 1e-6,
        })
        .style({
            "stroke": d3.hsl((i = (i + 1) % 360), 1, .5),
            "stroke-opacity": 1
        })
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 100)
        .style("stroke-opacity", 1e-6)
        .remove();

    d3.event.preventDefault();
}