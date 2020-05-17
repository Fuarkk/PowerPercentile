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
                 .domain([350, 0])
                 .range([40, dashHeight - 40]);


   var x_axis = d3.axisBottom()
                  .scale(scaleX);

   var y_axis = d3.axisRight()
                 .scale(scaleY);

   drawLine(squatData, "squat", scaleX, scaleY, "blue");
   drawLine(benchData, "squat", scaleX, scaleY, "green");
   drawLine(deadliftData, "squat", scaleX, scaleY, "purple");



    // Add scales to axis


    displayContext.append("g")
      .attr("transform", "translate(0," + (dashHeight - 40) + ")")
      .call(x_axis);

    displayContext.append("g")
      .attr("transform", "translate(" + 40 +  ",0)")
      .call(y_axis);
}


function drawLine(data, name, sx, sy, colour){

  sortedData = middleSort(data);

  console.log(100/3);

  mult = (100 + (data.length+1/ 100)) / data.length+1;

  var lineFunction = d3.line()
    .x(function(d, i) { return sx(mult*i) })
    .y(function(d) { return sy(d); })
    .curve(d3.curveCatmullRom);

    var lineGraph = displayContext.append("path")
    .attr("d", lineFunction(sortedData))
    .attr("stroke", colour)
    .attr("stroke-width", 2)
    .attr("fill", "none");
}

function middleSort(data){

  //https://stackoverflow.com/a/21911322/10757449
  return data.sort(function(a, b) {
      return a - b;
  }).map(function(v, i, a) {
      var p = ~~(a.length / 2);
      return i >= p ? a[a.length - i + p - 1] : v;
  });

}
