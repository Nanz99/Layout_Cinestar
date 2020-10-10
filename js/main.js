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
            breakpoint: 600,
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
   $('#movie-carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,

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
            breakpoint: 600,
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