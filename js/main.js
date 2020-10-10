$(document).ready(function () {
   $('#slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
   });

   $('#promotion-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         }

      ]
   });
   $('#movie-carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
            }
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3
            }
         },
         {
            breakpoint: 776,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }

      ]
   });
 
});
// back to top
var backToTop = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      backToTop.classList.add("backToTop-active");
   }
   else {
      setTimeout(() => {
         backToTop.classList.remove("backToTop-active");
      }, 200);
   }
});

backToTop.addEventListener("click", () => {
   window.scrollTo(0, 0);
});


document.querySelector('.btn-bars').addEventListener("click",() => {
   document.querySelector('.header__content').classList.toggle("active");
});

const stickyHeader = document.getElementById("sticky-header");
const language = document.querySelector('.language');
console.log(stickyHeader);
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 20) {
      stickyHeader.classList.add("sticky-header");

   }
   else {
      setTimeout(() => {
         stickyHeader.classList.remove("sticky-header");
      }, 300);
   }
})