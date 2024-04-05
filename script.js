window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.width = "90%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.left = "5vw";
  } else {
    document.getElementById("header").style.width = "100%";
    document.getElementById("header").style.position = "static";
    document.getElementById("header").style.margin = "0.25rem auto";
  }
}