function drawChart(){

  displayContext = d3.select(".displayContext");

  var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                   { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                   { "x": 80,  "y": 45},  { "x": 100, "y": 60},
                   { "x": 120,   "y": 85},  { "x": 140,  "y": 20},
                   { "x": 160,  "y": 102}, { "x": 180,  "y": 40},
                   { "x": 200,  "y": 542},  { "x": 220, "y": 60},
                   { "x": 240,   "y": 52},  { "x": 260,  "y": 20},
                   { "x": 280,  "y": 104}, { "x": 330,  "y": 40}];

   var lineFunction = d3.line()
     .x(function(d) { return d.x; })
     .y(function(d) { return d.y; })
     .curve(d3.curveLinear);

    var lineGraph = displayContext.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none");

}
