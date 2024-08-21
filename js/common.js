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

// const thisYear = document.querySelector('.this-year');
// thisYear.textContent = new Date().getFullYear();
