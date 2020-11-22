//Zadanie 1

let array = [1, 2, 3, 4, 5, 6, 7];
array.forEach(element => console.log(element));

//Zadanie 2

//pierwszy element i drugi
console.log(`pierszy element tablicy to: ${array[0]} drugi element tablicy to ${array[1]}`);

//ostatni element
console.log(`ostatni element tablicy to: ${array[array.length - 1]}`);

//wszyskie elementy
let secArr = ['intel', 'ryzen', 'javascript', 'programowanie', 'wsei', 1,2,3]
for (let i = 0; i < secArr.length; i++){
    console.log(`element tablicy numer ${i + 1} to: ${secArr[i]}`);
}

//co drugi element tablicy

const secondElement = secArr.filter((item, index) => index % 2 === 0);
console.log(secondElement);

//wszystkie stringi
const onlyStrings = secArr.filter(element => typeof element === 'string');
console.log(onlyStrings)

//wszystkie numbery
const onlyNumbers = secArr.filter(element => typeof element === 'number');
console.log(onlyNumbers)

//Zadanie 3 największa bez użycia math

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const summary = numberArray.reduce((a, b) => a + b);
const odds = numberArray.reduce((a, b) => a - b);
const average = numberArray.reduce((a, b) => a + b) / numberArray.length
const even = numberArray.filter(element => element % 2 === 0);
const odd = numberArray.filter(element => element % 2 !== 0);
const biggest = Math.max.apply(null, numberArray)
const smalest = Math.min.apply(null, numberArray)
const reverseArray = numberArray.reverse()
console.log(summary)

// Bez użycia Math
//
// let champion = numbersTab[0];
// numbersTab.forEach(number => {
//     if (number > champion) {
//         champion = number;
//     }
// })

// Najmniejsza bez użycia Math
//
// let min = numbersTab[0];
// numbersTab.forEach(number => {
//     if (number < champion) {
//         champion = number;
//     }
// })

//Zadanie 4

const summaryArray = (array) => {
    const summary = array.reduce((a, b) => a + b);

    return summary
}

//Zadanie 5

const calcArray = (array) => {
    const avg = array.reduce((a, b) => a + b) / array.length;
    
    for (let i = 0; i < array.length; i++){
        console.log(array[i] * avg);
    }
}

//Zadanie 6

const evenAvg = (array) => {
    const even = array.filter(element => element % 2 === 0);
    const summaryEven = even.reduce((a, b) => a + b);
    
    return summaryEven / even.length
}

//Zadanie 7

const sortArray = (array) => {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
}

// Zadanie 8
// liczba z jednej tablicy dodać liczba z drugiej tablicy

// function getIndexesFrom(array1, array2) {
//     let indexArray = [];
//     array1.forEach((e, index) => {
//         indexArray.push(index);
//     })
//     array2.forEach((e, index) => {
//         indexArray.push(index);
//     })
//     return indexArray;
// }

// console.log(getIndexesFrom(myNumberArray, myNumberArray2));
// console.log('');

// const arr1 = [1, 5, 8, 44, 56, 39];
// const arr2 = [9, 0, 21, 78, 8, 4];
// const newArr = [];

// function addIndexes(arr1, arr2) {
//     arr1.forEach((num1, i) => {
//         newArr.push(num1 + arr2[i]);
//     });
//     return newArr;
// }

// console.log(addIndexes(arr1, arr2));

const indexSummary = (firstArray, secondArray) => {
    const firstIndex = firstArray.
}

// Zadanie 9 - nie trzeba oddawać 9

const specialFilter = (array, element) => {
    return array.filter(item => item !== element);
}

// Zadanie 10

const negativeArray = (array) => {
    let changedArray = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] === -array[i]) {
            changedArray.push(array[i])
        } else if (array[i] !== -array[i]) {
            changedArray.push(-array[i]);
        }
    }

    return changedArray;
}

// function invert(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = - arr[i];
//     }

//     return arr;
// }

// console.log(invert([-2,-1,0,1,2]));