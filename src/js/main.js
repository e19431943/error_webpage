/*查看回傳值*/
const showLog = document.querySelector('#show');
const showLog2 = document.querySelector('#show2');


/*圖片定位*/
const screenHeight = window.innerHeight/2;
const cloth = document.querySelector('.role-cloth'); //衣服
let clothHeight = screenHeight +15;
cloth.style.setProperty('top',`${clothHeight}px`);

const face =document.querySelector('.role-face'); //臉
let faceHeight = screenHeight-50;
face.style.setProperty('top',`${faceHeight}px`);

const neck =document.querySelector('.neck'); //脖子
let neckHeight = screenHeight;
neck.style.setProperty('top',`${neckHeight}px`);

const backHair = document.querySelector('.role-back-hair'); //後髮
let backHairHeight = screenHeight -70;
backHair.style.setProperty('top',`${backHairHeight}px`);

const frontHair = document.querySelector('.role-front-hair'); //前髮
let frontHairHeight = screenHeight -78;
frontHair.style.setProperty('top',`${frontHairHeight}px`);

const leftPonytail = document.querySelector('.role-left-ponytail'); //左馬尾
let leftPonytailHeight = screenHeight - 50;
leftPonytail.style.setProperty('top',`${leftPonytailHeight}px`);

const rightPonytail = document.querySelector('.role-right-ponytail'); //右馬尾
let rightPonytailHeight = screenHeight - 50;
rightPonytail.style.setProperty('top',`${rightPonytailHeight}px`);

const leftEye = document.querySelector('.role-left-eye'); //左眼
let leftEyeHeight = screenHeight;
leftEye.style.setProperty('top',`${leftEyeHeight}px`);

const rightEye = document.querySelector('.role-right-eye'); //右眼
let rightEyeHeight = screenHeight;
rightEye.style.setProperty('top',`${rightEyeHeight}px`);
let choosed ='';
/*監聽滑鼠事件*/
addEventListener('mousemove',function(mouseTarget)
{
  const LeftRight = window.innerWidth/2;
  const Top =window.innerHeight/2.5;
  const Down =(window.innerHeight)-Top;
  const level = window.innerWidth/3;
  showLog.innerHTML = `
  X:${mouseTarget.clientX},Y:${mouseTarget.clientY}\n
  X:${mouseTarget.screenX},Y:${mouseTarget.screenY}\n
  `;
  /*
    滑鼠的位置的X軸,小於視窗一半，也就是說滑鼠在左半邊時會觸發,
    如果沒有觸發，就是在右邊
  */
  if(mouseTarget.clientX<= LeftRight)
  {
    removeClass(choosed);
    showLog2.innerHTML = '左';
    choosed = 'left';
    face.classList.add('face-left');
    frontHair.classList.add('front-hair-left');
    leftEye.classList.add('left-eye-left');
    rightEye.classList.add('right-eye-left');
    rightPonytail.classList.add('right-ponytail-left');
    leftPonytail.classList.add('left-ponytail-left');
    backHair.classList.add('back-hair-left');
  }
  else
  {
    removeClass(choosed);
    showLog2.innerHTML='右';
    choosed = 'right';
    face.classList.add('face-right');
    frontHair.classList.add('front-hair-right');
    leftEye.classList.add('left-eye-right');
    rightEye.classList.add('right-eye-right');
    rightPonytail.classList.add('right-ponytail-right');
    leftPonytail.classList.add('left-ponytail-right');
    backHair.classList.add('back-hair-right');
  }
  /*
    滑鼠的位置會比中心點在一半再上去一點，會根據圖的大小來調整觸發的範圍。
    else if　的範圍還要進行調整
  */
  if(mouseTarget.clientY <= Top)
  {
    removeClass(choosed);
    showLog2.innerHTML="上";
    choosed = 'top';
    face.style.setProperty('top',`${screenHeight -60}px`);
    frontHair.style.setProperty('top',`${screenHeight - 88}px`);
    backHair.style.setProperty('top',`${screenHeight -80}px`);
    leftEye.style.setProperty('top',`${screenHeight -18}px`);
    rightEye.style.setProperty('top',`${screenHeight -18}px`);
    frontHair.classList.add('front-hair-top');
    leftPonytail.classList.add('left-ponytail-top');
    rightPonytail.classList.add('right-ponytail-top');

  }
  else if(mouseTarget.clientY>= Down)
  {
    removeClass(choosed);
    showLog2.innerHTML="下";
    choosed = 'down';
    face.style.setProperty('top',`${screenHeight -40}px`);
    frontHair.style.setProperty('top',`${screenHeight - 68}px`);
    backHair.style.setProperty('top',`${screenHeight -60}px`);
    leftEye.style.setProperty('top',`${screenHeight +18}px`);
    rightEye.style.setProperty('top',`${screenHeight +18}px`);
    leftPonytail.classList.add('left-ponytail-down');
    rightPonytail.classList.add('right-ponytail-down');
    frontHair.classList.add('front-hair-down');
  }
  /*
    左上
    會同時滿足小於視窗的變數top的高和小於視窗寬度的三分之一，
    會在左上方形成一個小一點的觸發區域
    
    左下
    會同時滿足不小於視窗的變數DOWN的高，和小於視窗寬度的三分之一，
    會在左下方形成一個小一點的觸發區域
  */
  if(mouseTarget.clientY <= Top && mouseTarget.clientX <= level)
  {
    removeClass(choosed);
    showLog2.innerHTML="左上";
    choosed ='left-top';
    face.classList.add('face-left-top');
    frontHair.classList.add('front-hair-left-top');
    backHair.classList.add('back-hair-left-top');
    leftEye.classList.add('left-eye-left-top');
    rightEye.classList.add('right-eye-left-top');
    leftPonytail.classList.add('left-ponytail-left-top');
    rightPonytail.classList.add('right-ponytail-left-top');

  }
  else if(mouseTarget.clientY >= Down && mouseTarget.clientX <= level)
  {
    removeClass(choosed);
    showLog2.innerHTML="左下";
    choosed ='left-down';
    face.classList.add('face-left-down');
    frontHair.classList.add('front-hair-left-down');
    backHair.classList.add('back-hair-left-down');
    leftEye.classList.add('left-eye-left-down');
    rightEye.classList.add('right-eye-left-down');
    leftPonytail.classList.add('left-ponytail-left-down');
    rightPonytail.classList.add('right-ponytail-left-down');
  }
  if(mouseTarget.clientY <= Top && mouseTarget.clientX >= (window.innerWidth-level)) 
  {
    removeClass(choosed);
    showLog2.innerHTML="右上";
    choosed='right-top'
    face.classList.add('face-right-top');
    frontHair.classList.add('front-hair-right-top');
    backHair.classList.add('back-hair-right-top');
    leftEye.classList.add('left-eye-right-top');
    rightEye.classList.add('right-eye-right-top');
    leftPonytail.classList.add('left-ponytail-right-top');
    rightPonytail.classList.add('right-ponytail-right-top');

  }
  else if(mouseTarget.clientY >= Down && mouseTarget.clientX >= (window.innerWidth-level))
  {
    removeClass(choosed);
    showLog2.innerHTML="右下";
    choosed='right-down'
    face.classList.add('face-right-down');
    frontHair.classList.add('front-hair-right-down');
    backHair.classList.add('back-hair-right-down');
    leftEye.classList.add('left-eye-right-down');
    rightEye.classList.add('right-eye-right-down');
    leftPonytail.classList.add('left-ponytail-right-down');
    rightPonytail.classList.add('right-ponytail-right-down');
  }
  /*
    的值在中間的時候reset
  */
  if(mouseTarget.clientX > (window.innerWidth/2 - 150) && mouseTarget.clientX < (window.innerWidth/2 + 150)&&
    (mouseTarget.clientY > (screenHeight -200) && mouseTarget.clientY < (screenHeight +200))
  ) {
    showLog2.innerHTML="中間";
    removeClass(choosed);
  }
});
function removeClass(text) {
    if(text === '' ) return;
    face.classList.remove(`face-${text}`);
    frontHair.classList.remove(`front-hair-${text}`);
    leftEye.classList.remove(`left-eye-${text}`);
    rightEye.classList.remove(`right-eye-${text}`);
    rightPonytail.classList.remove(`right-ponytail-${text}`);
    leftPonytail.classList.remove(`left-ponytail-${text}`);
    backHair.classList.remove(`back-hair-${text}`);

    face.style.setProperty('top',`${faceHeight}px`);
    frontHair.style.setProperty('top',`${frontHairHeight}px`);
    backHair.style.setProperty('top',`${backHairHeight}px`);
    leftEye.style.setProperty('top',`${screenHeight}px`);
    rightEye.style.setProperty('top',`${screenHeight}px`);

}