window.onload = function() {

  var d, h, m, s, colour;

  var displayTime = function() {

      d = new Date();
      h = d.getHours();
      m = d.getMinutes();
      s = d.getSeconds();

      if(h <= 9) { h = '0' + h.toString() }
      if(m <= 9) { m = '0' + m.toString() }
      if(s <= 9) { s = '0' + s.toString() }

      color = "#" + h.toString() + m.toString() + s.toString();

      document.body.style.backgroundColor = color;
      document.getElementById("hex").innerHTML = color;

      setTimeout(displayTime, 1000);
  };

  displayTime();

}
