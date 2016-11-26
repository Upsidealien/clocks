var dataset = [40, 20];

var width = 460,
height = 300,
radius = Math.min(width, height) / 2;

var color = ['#000000', '#FFFFFF'];

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

function render(data) {
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

render(dataset);

setInterval(function(){
update();
}, 2000);

function update() {

dataset = [Math.random()*50, Math.random()*50];

render(dataset);
}
