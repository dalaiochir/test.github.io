document.addEventListener("DOMContentLoaded", function() {
  var currentTime = new Date().getHours();
  if (currentTime >= 6 && currentTime < 18) {
    document.getElementById("square").style.backgroundColor = "green";
    document.getElementById("square").style.position = "absolute";
    document.getElementById("square").style.top = "0";
    document.getElementById("square").style.left = "0";
  } else {
    document.getElementById("square").style.backgroundColor = "red";
    document.getElementById("square").style.position = "absolute";
    document.getElementById("square").style.bottom = "0";
    document.getElementById("square").style.right = "0";
  }
});