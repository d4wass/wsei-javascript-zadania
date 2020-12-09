//zadanie 1

const btn = document.querySelector('#test-event');
const input = document.querySelector('#input-test');

btn.addEventListener('click', e => console.log(e))
document.addEventListener('mousemove', (e) => console.log(e));
btn.addEventListener('mouseover', e => console.log(e));
document.addEventListener('keydown', e => console.log(e));
document.addEventListener('scroll', e => console.log(e));
input.addEventListener('input', e => console.log(e));

//zadanie 2

const secondBtn = document.querySelector('#ex2');

secondBtn.addEventListener('click', () => {
    const text = secondBtn["dataset"].text
    document.getElementById('span-ex2').innerText = text;
})

//zadanie 3

const div = document.querySelector('#ex3');
div.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue'
})
div.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'red'
})

//zadanie 4
const testInput = document.querySelector('#input-test');
const span = document.querySelector('#ex3-err');

testInput.addEventListener('input', (e) => {
    const regex = /\d+/g;
    if (regex.test(e.target.value)) {
        span.innerText = 'error, do pola nie można wpisać liczb'
    } else if (!regex.test(e.target.value)) {
        span.innerText = ''
    }
})

//zadanie 5

const counterSpan = document.querySelector('#ex5 span');
const counterBtn = document.querySelector('#ex5-button');
let counter = 0;

function setCounter(){
    counter++;
    counterSpan.innerHTML = counter;

    if (counter >= 10) {
        counterBtn.removeEventListener("click", setCounter);
    }
}
counterBtn.addEventListener('click', setCounter);


//zadanie 6

document.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        document.body.style.backgroundColor = 'red';
    } else if (window.scrollY <= 200) {
        document.body.style.backgroundColor = '#fff';
    }
});

//zadanie 7
const buttons = document.querySelectorAll('#calculator button');
const inputCalc = document.querySelector('#calculator input');

let firstNumber = 0;
let funcBtn = "";
let result = 0;

buttons.forEach(item => {
    let {textContent} = item
    if (textContent === "+" || textContent === "-" || textContent === "/" || textContent === "*") {
        item.addEventListener("click", (e) => handleLogic(e))
    } else {
        item.addEventListener("click", (e) => handleNumber(e))
    }
})

const handleNumber = (e) => {
    firstNumber === 0 ? firstNumber = e.target.textContent : firstNumber += e.target.textContent
    firstNumber = parseInt(firstNumber);
}

const handleLogic = (e) => {
    let { textContent } = e.target;

    if (result === 0 && firstNumber !== 0) {
        result = firstNumber;
        inputCalc.value = result;
        firstNumber = 0;
    } else {
        switch (textContent) {
            case "-":
                if (result === 0) {
                    result = result - firstNumber;
                }
                result -= firstNumber;
                inputCalc.value = result
                firstNumber = 0;
                break;
            case "+":
                result += firstNumber;
                inputCalc.value = result
                firstNumber = 0;
                break;
            case "/":
                if (firstNumber > 0) {
                    result = result / firstNumber;
                    firstNumber = 0;
                    inputCalc.value = result
                } else {
                    alert('nie dzieli się przez 0')
                }
                break;
            case "*":
                result = result * firstNumber;
                inputCalc.value = result
                firstNumber = 0;
                break;
        }
    }
}