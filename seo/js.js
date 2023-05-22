const haha = document.getElementById("button-con");
const state = document.getElementById("cb1");
state.checked = false;

function hehe() {
  if (state.checked == false) {
    document.body.style.backgroundColor = "#25272A";
    state.checked = true;
  } else {
    document.body.style.backgroundColor = "#857c6d";
    state.checked = false;
  }
}



var h1 = document.querySelector("h1");
h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});
