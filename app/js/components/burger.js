 $(function () {

   // Кнопка открыть мобильное меню
   $('.burger-btn').on('click', function () {
     $('.mobile-menu').toggleClass('mobile-menu--active');
     $('#header').toggleClass('header--active');
     $('.burger-btn').toggleClass('burger-btn--active');
     $('.burger-btn__icon').toggleClass('burger-btn__icon--active');
     $('.burger-bg').toggleClass('burger-bg--active');
   });

   // Кнопка закрыть мобильное меню
   $('.burger-bg').on('click', function () {
     $('.mobile-menu').removeClass('mobile-menu--active');
     $('.burger-btn').removeClass('burger-btn--active');
     $('.burger-btn__icon').removeClass('burger-btn__icon--active');
     $('.burger-bg').removeClass('burger-bg--active');
   });

 });