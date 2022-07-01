$(function () {
  
  // Закрыть по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.overlay').removeClass('overlay--active');
    }
  });

  //  Закрыть мобильное меню по клику на якоря
  // $('.mobile-menu__link').on('click', function () {
  //   $('.mobile-menu').removeClass('mobile-menu--active');
  // });

  // Открыть фильтр категории
  // $('.catalog__btn-mobile').on('click', function () {
  //   $('.catalog-mobile').toggleClass('catalog-mobile--active');
  // });

  // Скрол для якорей
  // $('.menu__link, .mobile-menu__link, .hero__btn').on('click', function () {
  //   let href = $(this).attr('href');
  //   $('html, body').animate({
  //     scrollTop: $(href).offset().top
  //   }, {
  //     duration: 400,
  //     easing: "linear"
  //   });
  //   return false;
  // });

  // Липкое меню
  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
    scrollPrev = scrolled;
  });

  // Табы на product-page
  // $('.product-tabs__link').on('click', function (e) {
  //   e.preventDefault();
  //   $('.product-tabs__link').removeClass('product-tabs__link--active');
  //   $(this).addClass('product-tabs__link--active');
  //   $('.product-content__item').removeClass('product-content__item--active');
  //   $($(this).attr('href')).addClass('product-content__item--active');
  // });

});