AOS.init();
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// 2번째 페이지가 되면 to_the_direction의 이미지가 180도 회전한 체로 유지되라:

