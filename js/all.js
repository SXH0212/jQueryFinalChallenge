$(document).ready(function () {

  // 下拉式選單
  $('.dropdown').click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $(this).next('.dropdown-open').slideToggle();

    $(this).parent().siblings().find('.dropdown-open').slideUp();
  });

  // 輪播
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 1500,
    },
    // effect: 'cube',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // 燈箱
  lightbox.option({
    'resizeDuration': 250,
    'wrapAround': true
  });

  // 回到頂部
  $('.fa-arrow-up').click(function (e) {
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
});