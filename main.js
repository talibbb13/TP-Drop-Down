var dropDown = document.querySelector("#dropDown");
var options = document.querySelector("#options");
var input = document.querySelector("#dropDown input");

dropDown.addEventListener("click", function() {
  this.classList.toggle("show");
});

options.addEventListener("click", function(event) {
  input.value= event.target.innerHTML
})
