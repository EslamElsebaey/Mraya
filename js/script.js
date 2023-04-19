
$(window).load(function(){
  $(".preloader").fadeOut();
})



$(document).ready(function () { 
      
  

/***************************************************************************************** */
  // show and hide search box

  $(".openMySearch").click(function(){
    $(".search-holder-parent").fadeToggle(200);
    $("body").addClass("overflow-hidden-body") ;
    $(".search-holder-input").addClass("open-search");
  })
  $(".closeSearh-btn").click(function(){
      $(".search-holder-input").removeClass("open-search");
      setTimeout(() => {
      $(".search-holder-parent").fadeToggle(300);
    }, 200);
    $("body").removeClass("overflow-hidden-body") ;
   
  })


/***************************************************************************************** */
// open and close sideBar

$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("header").toggleClass("filter-drop");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
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




/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
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
    $("header").addClass("fixed");
    if($(window).width() > 768){
      $(".logo img").addClass("logo-img-big");
    }
  } else {
    $("header").removeClass("fixed");
    if($(window).width() > 768){
      $(".logo img").removeClass("logo-img-big");
    }
  
  }
});







 })


 



