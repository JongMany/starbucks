const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  //Logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  //HTML 속성을 설정하는 메소드 
  searchInputEl.setAttribute('placeholder', '통합검색'); 
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  //HTML 속성을 설정하는 메소드 
  searchInputEl.setAttribute('placeholder', ''); 
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해의 연도 계산  