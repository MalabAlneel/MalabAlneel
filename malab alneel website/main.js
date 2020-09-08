
window.onload=function(){
    const menuBtn = document.querySelector('.menu-btn');
    const navBar = document.querySelector('.navbar')
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      navBar.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navBar.classList.remove('open');
      menuOpen = false;
      }
  });

  var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
mybutton.onclick = function(){topFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() { document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;}

  }


// theme change
var count= 0;


 function themeChange (){


if (count % 2 == 0)
document.getElementById('theme').href= 'lightmode.css';
else
  document.getElementById('theme').href='style.css';
  count++;
} ;

//carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides ");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
 //contact page alert
 function myFunction() {
  alert("this page is not real! your email has not been sent!");
}

// pop up illustrations

var modal = document.getElementById("myModal");

var fstill = document.getElementById("fstill");

var span = document.getElementsByClassName("close")[0];

fstill.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
