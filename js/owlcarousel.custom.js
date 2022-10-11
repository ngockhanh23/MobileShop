$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      autoplay:true,
      autoplayTimeout:2500,
      loop:true,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:2,
            margin:50
        },
        390:{
          items:1,
          margin:70
        },
        412:{
          items:2,
          margin:62
        },
        600:{
            items:2,
            margin:50
        },
        1024:{
          items:4,
          margin:85     

        }
    }
    });
    $(".owl-item").css("width","180px")
    $(".owl-stage").css("height","400px")
  });

