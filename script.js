window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var content = document.getElementById("content");

  if (window.scrollY > 0) {
    navbar.classList.add("transparent");
    content.style.marginTop = "110px";
  } else {
    navbar.classList.remove("transparent");
    content.style.marginTop = "60px";
  }
});

var openButton = document.getElementById("openButton");
var closeButton = document.getElementById("closeButton");
var sidebar = document.getElementById("sidebar");

openButton.addEventListener("click", function () {
  sidebar.classList.add("open");
});

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("open");
});
