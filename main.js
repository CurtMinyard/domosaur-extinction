//mess-with-me
//document.querySelector('.mess-with-me')
//span.style.fontsize = '40px';
const span = document.querySelector('.mess-with-me');
span.style.fontSize = "40px";
span.style.backgroundColor = "green";
const hide = document.querySelector('#hide-me-area');
hide.style.display = "none";
const img = document.querySelector('#triceratops')
img.style.width = "324px";
document.querySelector('.mess-with-me').addEventListener('click', function() {
this.style.color = "orange";
});
document.querySelector('#triceratops').addEventListener('click', function() {
this.style.border = '5px solid red';
});
document.querySelector("#feathers").addEventListener("click", function () {
  this.style.opacity = "0.5";
});
const toggleButton = document.querySelector("#toggle");
const rowSection = document.querySelector("#row");
let isToggled = false;
toggleButton.addEventListener("click", function () {
  if (!isToggled) {
    rowSection.style.backgroundColor = "#c8f4f9"; 
    isToggled = true;
  } else {
    rowSection.style.backgroundColor = "white";
    isToggled = false;
  }
});
const bigDino = document.querySelector("#biggify");
bigDino.addEventListener("mouseenter", function () {
  bigDino.style.width = "200px";
});
bigDino.addEventListener("mouseleave", function () {
  bigDino.style.width = ""; 
});
