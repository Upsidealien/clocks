d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
milli = d.getMilliseconds();

var dataset = [s, 60-s];

var width = 100,
height = 100,
radius = Math.min(width, height) / 2;

var color = ['#000000', '#FFFFFF'];

var secondsPie = d3.select("#pie").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

function render(data, svg) {
    var pie = d3.pie()
      .sort(null);

    var arc = d3.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 50);

    var path = svg.selectAll("path")
      .data(pie(data));

    var pathEnter = path.enter().append("path")
      .attr("fill", function(d, i) { return color[i]; })
      .attr("d", arc);

    var pathUpdate = path.attr("d", arc);
}

render(dataset, secondsPie);

setInterval(function(){
update();
}, 1000);

function update() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  dataset = [s, 60-s];
  render(dataset, secondsPie);
}
