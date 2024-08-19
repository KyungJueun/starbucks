const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 최적화
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// setattribute는 html의 속성을 부여한다. = searchInputEl에 placeholder라는 html 속성을 추가
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// window.addEventListener('scroll', function() {
//   console.log('scroll!');
// });
// 브라우저 창이라고 이해, 윈도우 객체
// 함수가 너무 많이 실행되면 무거워지기 때문에 외부에서 가져올 수 있는 JS 라이브러리를 통해 제어

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    // 스크롤이 화면의 어디에 위치하는지 알려줌.
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // JS 라이브러리는 옵션으로 객체 데이터 많이 사용, css 속성 사용
      // badgeEl.style.display = "none";
      // 속성 표기는 .()
      // badgeEl:요소, style:css의 전역속성, display:css 속성
    } else {
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// 300ms=0.3s=0.3s 부하를 줘서 함수가 한 번에 많이 실행되는 것을 방지(throttle의 기능)
// _.throttle(함수, 시간)
// opacity는 시각적으로만 없앤 것. 실제로 요소가 그 자리에 없어야 뒤쪽 요소 클릭 가능
// display 따옴표 주의
// display는 중간 값이 없기 때문에 자연스러운 전환 효과를 만들 수 없어 opacity 값 필요

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new : 생성자(JS class)
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
// 기본 direction: horizontal
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // true가 됨
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
// AWARDS
new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    // 무한반복
    yoyo: true,
    // 이전 애니메이션 역재생
    ease: Power1.easeInOut,
    // ease나 timing 함수
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시되었는지 표시하는
  })
    .setClassToggle(spyEl, "show")
    // show라는 클래스를 넣었다 뺐다 함.
    .addTo(new ScrollMagic.Controller());
  // 아직 무슨뜻인지 잘 모르겠음...
});
