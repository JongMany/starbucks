const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// _.throttle(함수, 시간(ms))
window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY>500) {
    //배지 숨기기
    //gsap(요소, 시간(s), 옵션)
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl,.2,{
      x:0
    });
  }else {
    //배지 보이기
    gsap.to(badgeEl,.6,{
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl,.2,{
      x: 100
    });
  }
},300));

toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index+1) *.7,
    opacity: 1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

 new Swiper('.promotion .swiper-container',{
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이도록
  loop:true,
  // autoplay: { //옵션 명시
  //   delay: 5000 //(ms 단위)
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
 });

new Swiper('.awards .swiper-container',{
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 let isHidePromotion = false;
 promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion;//지속적으로 반대로 바꿔주는 코드
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
 });


 function random(min, max){
  return parseFloat((Math.random()*(max-min) +min).toFixed(2));
 }
 function floatingObject(selector,delay, size){
  gsap.to(selector, //선택자
    random(1.5,2.5), //동작 시간
    { // 옵션
    y: size,
    repeat: -1, //무한 반복
    yoyo: true, //재생된 애니메이션을 뒤로 재생
    ease: Power1. easeInOut, //통통 튀는 것 방지
    delay: random(0, delay) //지연 시간
  });
 }

 floatingObject('.floating1',1, 15);
 floatingObject('.floating2',.5, 15);
 floatingObject('.floating3',1.5, 20);


 const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8 //ViewPort 시작-0 끝-1 0.8지점이 보일 때 hook
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});
