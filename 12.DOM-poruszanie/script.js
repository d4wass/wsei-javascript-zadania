// zadanie 1
console.log(document.querySelector('#buz').parentNode)
console.log(document.querySelector('#baz').nextElementSibling)
console.log(document.querySelector('#foo').children)
console.log(document.querySelector('#foo').parentNode)
console.log(document.querySelector('#foo').firstElementChild)
console.log(document.getElementById("foo").children[Math.floor(document.getElementById("foo").children.length / 2)]);

const middleChild = document.querySelector('#foo').childNodes
const lenght = Math.floor(middleChild.length/2)
console.log(middleChild[lenght])

//zadanie 2

const element = document.querySelector('#ex2');
const showValueOfElement = (element) => {
    element.addEventListener('click', () => {
        console.log(element.childNodes[1].innerText.trim())
    })
}
showValueOfElement(element);

//zadanie 3 i 4

const addEvents = () => {
    const element = document.querySelector('#ex3');
    const buttons = element.getElementsByTagName('button');

   [...buttons].forEach(item => item.addEventListener('click', () => {
       const sibling = item.nextElementSibling;
       const parent = item.parentElement;
       let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

       parent.style.backgroundColor = randomColor;

       if (sibling.style.display === 'none') {
           sibling.style.display = 'block';
       } else {
           parent.style.backgroundColor = "#fff";
           sibling.style.display = 'none';
       }
    }))
}

addEvents();

//Zadanie 5
const divElements = document.querySelectorAll('#ex5 div');
const liElements = document.querySelectorAll('#ex5 ul li');

const onHover = (index) => {
    const divBgColor = divElements[index].style.backgroundColor
    //first element
    liElements[0].style.backgroundColor = divBgColor;
    //last element
    liElements[liElements.length - 1].style.backgroundColor = divBgColor;
    //evenElements
    const evenElements = [...liElements].filter((item, index) => ((index + 1) % 2 === 0))
    evenElements.forEach(item => item.style.backgroundColor = divBgColor);
    //allElements
    liElements.forEach(item => item.style.backgroundColor = divBgColor);
    //whole list -> ul
    liElements[0].parentElement.style.backgroundColor = divBgColor;
}

divElements.forEach((item, index) => item.addEventListener('mouseover', () => onHover(index)));


//Zadanie 6

const divElement = document.querySelector('#ex6');

const firstCombination = divElement.firstElementChild.firstElementChild.firstElementChild
const secondCombination = divElement.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement
const thirdCombination = divElement.parentElement.firstElementChild.parentElement.childNodes[1].firstElementChild.firstElementChild.firstElementChild