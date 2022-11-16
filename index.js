var menuButton = document.querySelector(".hamburger-menu");
var unorderedList = document.querySelector(".unorderedlist");
var triangle = document.querySelector(".triangle");



menuButton.addEventListener("click", function () {
  if (unorderedList.style.display==="none") {
    unorderedList.style.display="flex";
    triangle.style.display="block";
  } else {
    unorderedList.style.display="none";
    triangle.style.display="none";
  }
    
})
