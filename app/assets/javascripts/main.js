function drawChart(){

  displayContext = d3.select(".displayContext");

  dashWidth  = 1400;
  dashHeight = 600;


  var squatData    = [ 201, 172, 342, 120, 193, 141, 152];
  var benchData    = [ 100, 42,  63,  104, 123, 111,  90];
  var deadliftData = [ 300, 285, 140, 120, 190, 145,  95];


  var lineData = [ { "x": 0,   "y":  0},  { "x": 10,  "y": 10},
                   { "x": 20,  "y": 20},  { "x": 30,  "y": 30},
                   { "x": 40,  "y": 60},  { "x": 50, "y": 50},
                   { "x": 60,  "y": 140},  { "x": 70, "y": 30},
                   { "x": 80,  "y": 20}, { "x": 90, "y": 10},
                   { "x": 100, "y": 0}];

   var scaleX = d3.scaleLinear()
                 .domain([0, 100])
                 .range([40, dashWidth]);

   var scaleY = d3.scaleLinear()
                 .domain([140, 0])
                 .range([40, dashHeight - 40]);

   var lineFunction = d3.line()
     .x(function(d) { return scaleX(d.x); })
     .y(function(d) { return scaleY(d.y); })
     .curve(d3.curveCatmullRom);

    var lineGraph = displayContext.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none");

    // Add scales to axis
    var x_axis = d3.axisBottom()
                   .scale(scaleX);

    var y_axis = d3.axisRight()
                  .scale(scaleY);

    displayContext.append("g")
      .attr("transform", "translate(0," + (dashHeight - 40) + ")")
      .call(x_axis);

    displayContext.append("g")
      .attr("transform", "translate(" + 40 +  ",0)")
      .call(y_axis);
}
