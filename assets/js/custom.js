$(document).ready(function () {

  // AOS Initialize
  AOS.init({
    once: true,
    mirror: false,
    offset: 50,
    duration: 800,
    easing: 'ease-in-out',
  });

  function setHeaderHeight() {
    let headerHeight = $('header').outerHeight(); // get header height including padding
    $(':root').css('--headerHeight', headerHeight + 'px');
  }

  // Run on page load
  setHeaderHeight();

  // Run on window resize
  $(window).on('resize', function () {
    setHeaderHeight();
  });

  // Mobile Menu Toggle
  $('.menu-btn, .mainMenu > nav > ul > li > a').on('click', function () {
    $('.menu-btn, .nav, .mainMenu,.headMenu,.menu-overlay').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  $('.menu-overlay').on('click', function () {
    $('.menu-btn, .nav, .mainMenu,.headMenu,.menu-overlay').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  // Slick Slider
  $('.teamSlideBox').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          variableWidth: true,   // allow custom width per slide
          centerMode: false      // prevent centering
        }
      }
    ]
  });

  $('.gallerySlider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Sticky Header
  $(window).on("scroll", function () {
    $(".headerSec").toggleClass("stickyHead", $(this).scrollTop() > 0);
  });

});