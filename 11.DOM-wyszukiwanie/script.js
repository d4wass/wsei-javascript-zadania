//zadanie 1

const allLists = document.querySelectorAll(".list");
console.log(allLists);

//zadanie 2


let allTags;

const searchTags = (tag) => {
    allTags = document.getElementsByTagName(tag)
    return allTags;
}

console.log(allTags);

//zadnie 3

const listElement = document.querySelector('#list');

//zadanie 4

const showElements = (li, ul, span, className, idName) => {
    const liElements = document.getElementsByTagName(li);
    const ulElements = document.getElementsByTagName(ul);
    const spanElements = document.getElementsByTagName(span);

    const spanInClass = document.querySelectorAll(`.${className} span`)
    const spanInId = document.querySelectorAll(`#${idName} span`)

    console.log(liElements)
    console.log(ulElements)
    console.log(spanElements)
    console.log(spanInClass)
    console.log(spanInId)
}