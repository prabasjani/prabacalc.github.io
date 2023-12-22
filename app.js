const display = document.getElementById('display');
const nameBtn = document.querySelector('.name-btn');
const calcName = document.querySelector('.calc-name');

function appendToDisplay(keys) {
    display.value += keys;
    nameBtn.style.background = 'hsl(300, 76%, 52%)';
    calcName.style.color = 'hsl(300, 76%, 52%)';
}

function clearScr(){
    display.value = '';
    display.style.color = 'white';
    nameBtn.style.background = 'hsl(120, 100%, 45%)';
    calcName.innerHTML = "Prabanjan's Calc ";
    calcName.style.color = 'white';
}
function calculate() {
    try {
        display.value = eval(display.value);
        nameBtn.style.background = 'hsl(120, 100%, 45%)';
        calcName.innerHTML = 'You got the Answer!';
        calcName.style.color = 'hsl(120, 100%, 45%)';
    } catch (error) {
        display.value = 'Error';
        display.style.color = 'red';
        nameBtn.style.background = 'red';
        calcName.innerHTML = 'Oops! Something went Wrong';
        calcName.style.color = 'red';
    }
}