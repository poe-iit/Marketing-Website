// let slideIndex =1;

function plusSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
