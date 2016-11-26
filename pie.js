//var seconds = 45;

drawPie(30);

function drawPie(seconds) {
  var dataset = {
    apples: [seconds, 100-seconds],
  };

  var width = 460,
      height = 300,
      radius = Math.min(width, height) / 2;

  var color = ['#000000', '#FFFFFF'];

  var pie = d3.pie()
      .sort(null);

  var arc = d3.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 50);

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var path = svg.selectAll("path")
      .data(pie(dataset.apples))
      .enter().append("path")
      .attr("fill", function(d, i) { return color[i]; })
      .attr("d", arc);
};
