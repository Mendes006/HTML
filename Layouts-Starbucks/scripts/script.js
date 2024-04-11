function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const popUp = document.querySelector('#login');
const button = document.querySelector('#botao-do-maico');
const icon = document.querySelector('#background-drop');
const card = document.querySelector('.card-login');
console.log(popUp);

button.addEventListener('click', () => {
    popUp.style.display = 'flex';
});

icon.addEventListener('click', () => {
    popUp.style.display = 'none';
});
