$(function () {

  // Маска для ввода телефона
  jQuery(function ($) {
    $(".application__phone, .connection__input-tel").mask("+7 (999) 999-99-99");
  });

  // Стили селекта - город
  $('.header-menu__select,.price__total-select,.price__total-amount').styler();

  // Закрыть по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.burger-btn').removeClass('burger-btn--active');
      $('.burger-btn__icon').removeClass('burger-btn__icon--active');
      $('.burger-bg').removeClass('burger-bg--active');
    }
  });

  // Бургер при скролле
  var header = $('.burger'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50) {
      $('.burger').addClass('burger--scroll');
    } else {
      $('.burger').removeClass('burger--scroll');
    }
    scrollPrev = scrolled;
  });

  //  Закрыть мобильное меню по клику на якоря
  $('.mobile-menu__link').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.burger-btn').removeClass('burger-btn--active');
    $('.burger-btn__icon').removeClass('burger-btn__icon--active');
    $('.burger-bg').removeClass('burger-bg--active');
  });

  // // Тач для меню
  // var menuTouch = $('.mobile-menu');

  // $("body").swipe({
  //   swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
  //     if (direction == 'right') {
  //       // Если нужен свайп вправо

  //       // $('.mobile-menu').addClass('mobile-menu--active');
  //       // $('.overlay').addClass('overlay--active');
  //       // $('#header').addClass('header--active');
  //       // $('.burger__line').addClass('burger__line--active');
  //     } else if (direction == 'left') {
  //       $('.mobile-menu').removeClass('mobile-menu--active');
  //       $('.overlay').removeClass('overlay--active');
  //       $('.burger__line').removeClass('burger__line--active');
  //     }
  //   }
  // });

  // Скрол для якорей
  $('.menu__link, .mobile-menu__link, .hero__link').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 400,
      easing: "linear"
    });
    return false;
  });

  // Липкое меню
  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50) {
      $('.header').addClass('header--scroll');
      $('.header-menu__phone').addClass('header-menu__phone--scroll');
    } else {
      $('.header').removeClass('header--scroll');
      $('.header-menu__phone').removeClass('header-menu__phone--scroll');
    }
    scrollPrev = scrolled;
  });

  // Табы на expert
  $('.command__tab-link').on('click', function (e) {
    e.preventDefault();
    $('.command__tab-link').removeClass('command__tab-link--active');
    $(this).addClass('command__tab-link--active');
    $('.expert').removeClass('expert--active');
    $($(this).attr('href')).addClass('expert--active');
  });


  // Initialise Carousel - anna
  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });

  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
  });

  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });

  // Initialise Carousel - varvara
  const mainCarousel_varvara = new Carousel(document.querySelector("#mainCarousel-varvara"), {
    Dots: false,
  });

  // Thumbnails
  const thumbCarousel_varvara = new Carousel(document.querySelector("#thumbCarousel-varvara"), {
    Sync: {
      target: mainCarousel_varvara,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
  });

  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery-varvara"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel_varvara.slideTo(mainCarousel_varvara.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });

  // Слайдер отзывы
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  });

  // Звезды на отзывы
  $(".reviews__star").rateYo({
    starWidth: "22px",
    ratedFill: "#FBCE45",
    readOnly: true,
    spacing: "7px",
    normalFill: "#C4C4C4"
  });

  // Анимация
  new WOW().init();

});