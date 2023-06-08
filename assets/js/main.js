/*$(document).ready(function() {
  $(".nav-link").hover(
    function() {
      $(this).addClass("active-link");
    },
    function() {
      $(this).removeClass("active-link");
    }
  );
});
 */

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Altere o valor para definir o intervalo de tempo entre os slides

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}