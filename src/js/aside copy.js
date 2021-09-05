const aside = document.querySelector('.aside-container');
const cols = document.querySelectorAll('.item-col');
const navChoosed = document.querySelectorAll('.nav-item');
navChoosed[0].onclick = () => {
    aside.style.setProperty('background-color','rgba(58, 54, 55, 0.7)');
    cols.forEach((item) => {
        console.log(item);
        item.style.setProperty('transform','translate(0, 0)')
    });
}

