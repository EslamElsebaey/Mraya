
$(window).load(function(){
  $(".preloader").fadeOut();
})



$(document).ready(function () { 
      
  

/***************************************************************************************** */
  // show and hide search box

  $(".openMySearch").click(function(){
    $(".search-holder-parent").toggleClass("show-search-box");
  })

  $(".closeSearh-btn").click(function(){
    $(".search-holder-parent").removeClass("show-search-box");
  })


/***************************************************************************************** */
// open and close sideBar

$(".bars").click(function(){
  $("header").toggleClass("filter-drop");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})


$(".closeBtn").click(function(){
  $("nav").removeClass("reset-left");
  $("body").removeClass("overflowHidden");
})




/********************************************************************************* */


    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});







/********************************************************************************* */


//  programs swipers

const bestseller = new Swiper('.bestseller .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },

  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    } , 
  }
});
const specials = new Swiper('.specials .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.specials .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.specials .swiper-button-next ',
    prevEl: '.specials .swiper-button-prev',
  },
 
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    } , 
  }
});
const newarrivals = new Swiper('.newarrivals .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.newarrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newarrivals .swiper-button-next ',
    prevEl: '.newarrivals .swiper-button-prev',
  },
 
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    } , 
  }
});







const collections = new Swiper('.collections .swiper', {
  loop: true,
  draggable: true,
  observer: true,
  observeParents: true,
  allowTouchMove : false,
  pagination: {
    el: '.collections .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.collections .swiper-button-next ',
    prevEl: '.collections .swiper-button-prev',
  },

  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15, 
      allowTouchMove : true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30, 
      allowTouchMove : true
    } , 
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } , 
  }
});



/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop");
    $(".close-sec button").addClass("close-margin")
  }else{
    $(".toTop").removeClass("showToTop");
    $(".close-sec button").removeClass("close-margin")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/********************************************************************************* */

// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }



/********************************************************************************* */




// FIXED NAV
    
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 40) {
    $(".search-holder-parent").removeClass("show-search-box");
    $("header").addClass("sticky-header");
    $(".top-header").slideUp(300);
    if($(window).width() > 768){
      $(".logo img").addClass("logo-img-big");
    }
  } else {
    $("header").removeClass("sticky-header");
    $(".top-header").slideDown(300);
    if($(window).width() > 768){
      $(".logo img").removeClass("logo-img-big");
    }
  
  }
});







 })


 



