const asideZoom = document.querySelector('.aside-container');
const asideItem =document.querySelectorAll('.aside-item');
const cols = document.querySelectorAll('.item-col');
/* 模組化aside-item觸發效果 */
export default function(index) {
  resPosition();
  asideItem[index].classList.add('aside-show');
  setTimeout(function() {
    asideZoom.classList.add('aside-zoom-show');
    cols.forEach((item) => {
        item.classList.add('item-slider-position');
    });
  },500);
}

/* 用來reset所有的aside-item顯示 */
function resPosition() {
  asideZoom.classList.remove('aside-zoom-show');
  asideItem.forEach((item)=>{
    item.classList.remove('aside-show');
  });
  cols.forEach((item) => {
    item.classList.remove('item-slider-position');
  });
} 