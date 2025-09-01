$(document).ready(function () {

  $('.menu-btn, .nav__link').on('click', function () {
    $('.menu-btn, .nav').toggleClass('active');
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