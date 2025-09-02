$(document).ready(function () {

  $('.menu-btn, .nav__link').on('click', function () {
    $('.menu-btn, .nav').toggleClass('active');
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
          infinite: true,
          dots: true
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

  $('.gallerySlider').slick({
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
          infinite: true,
          dots: true
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

  // Hamburger menu toggle
  $('.hambergerMenu').on('click', function () {
    $('.headNav > nav').toggleClass('active');
    $('body').toggleClass('menu-open');

    if (!$('.menu-overlay').length) {
      $('header').append('<div class="menu-overlay"></div>');
    }
  });

  // Close menu
  $(document).on('click', '.HamClose, .menu-overlay', function () {
    $('.headNav > nav').removeClass('active');
    $('body').removeClass('menu-open');
    $('.menu-overlay').remove();
  });

});