

var width = 100,
height = 100,
radius = Math.min(width, height) / 2;

var color = ['#000000', '#FFFFFF'];



var hoursPie = d3.select("#hours").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var minutesPie = d3.select("#minutes").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var secondsPie = d3.select("#seconds").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var millisecondsPie = d3.select("#milliseconds").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

function render(data, svg) {
    var pie = d3.pie()
      .sort(null);

    var arc = d3.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius - 5);

    var path = svg.selectAll("path")
      .data(pie(data));

    var pathEnter = path.enter().append("path")
      .attr("fill", function(d, i) { return color[i]; })
      .attr("d", arc);

    var pathUpdate = path.attr("d", arc);
}

update();
setInterval(function(){ update();}, 1);

function update() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  milli = d.getMilliseconds();

  millisecondsData = [milli, 1000 - milli];
  secondsData = [s, 60-s];
  minutesData = [m, 60-m];
  hoursData = [h%12, (24-h)%12];

  render(hoursData, hoursPie);
  render(minutesData, minutesPie);
  render(secondsData, secondsPie);
  render(millisecondsData, millisecondsPie);
}
