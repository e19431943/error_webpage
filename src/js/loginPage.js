/* 倒數數字動畫的部分 
  count 用來倒數的變數
*/
const innerCircle = document.getElementById('inner');
let count =0; 
const circleNumber = setInterval(() => {
  if(count === 0) {
    clearInterval(circleNumber);
    showEnter();
  }else {
    count--;
    innerCircle.innerText=`${count}%`;
  }
  if(count%4 === 0) {
    innerCircle.classList.add('inner-big');
  }
  else {
    innerCircle.classList.remove('inner-big');
  }
}, 200);

/* 用來當倒數為0時來讓圖出現的function */
const showButton = document.getElementById('showButton');  
const loginTitle = document.getElementById('loginTitle');
function showEnter() {
  loginTitle.textContent =`新世界已完成，請點選下方!!`;
  showButton.classList.add('show-enter');
}

/* 當enterButton被按下時的處理 */
showButton.addEventListener('click',(event) => {
  event.preventDefault();
  const loginPage = document.getElementById('loginPage');
  const mainPage = document.getElementById('mainPage');
  loginPage.classList.add('login-page-hiddle');
  mainPage.classList.add('main-page-show');
  setTimeout(() => {
    loginPage.style.setProperty('display','none');
  }, 1000);
});