// window.onscroll = function () {
//   var header = document.getElementsByName("header");
//   if (window.scrollY > 630) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// };

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("p").addClass("color_scroll");
    } else {
      $("p").removeClass("color_scroll");
    }
  });
});
