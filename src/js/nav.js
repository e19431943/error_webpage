import aside from './aside.js';

/* 當點擊甚麼選項，就會對應打開頁面 */
const navChoose = document.querySelectorAll('.nav-item');
navChoose.forEach((nav,index)=> {
  nav.addEventListener('click',function() {
    aside(index);
  });
});
