var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    //loop: true,
    speed:100,
    //effect:"flip",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })