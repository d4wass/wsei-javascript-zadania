//Zadanie 1

let firstNumber = 30;
let secondNumber = 20;

if (firstNumber > secondNumber) {
    console.log('firstNumber jest większa od secondNumber');
} else {
    console.log('secondNumber jest większa od firstNumber');
}
(firstNumber > secondNumber) ? console.log('firstNumber jest większa od secondNumber') : console.log('secondNumber jest większa od firstNumber');
// firstNumber jest większa od secondNumber

//Zadanie 2

let firstNum = 20;
let secondNum = 10;
let thirdNum = 30;

if (firstNum > secondNum && firstNum > thirdNum) {
    console.log('firstNum jest największą liczbą');
} else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log('secondNum jest największą liczbą');
} else {
    console.log('thirdNum jest największą liczbą');
}
// thirdNum jest największą liczbą

// Zadanie 3

for (let i = 0; i < 10; i++){
    console.log('Lubię JavaScript');
}
// Lubię JavaScript x10

//Zadanie 4

let result = 0;

for (let i = 1; i <= 10; i++){
    result += i;
}
// result = 55

//Zadanie 5

let n = 5;

for (let i = 0; i < n; i++){
    console.log(i % 2 === 0 ? "parzysta" : "nieparzysta");
}

//Zadanie 6

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7

for (let i = 0; i <= 100; i++){
    if (i === 0) {
        console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0)  {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//Zadanie 8a


let star = '*'

for (let i = 0; i < 5; i++){
    console.log(star);
    star += '*'
}

//Zadanie 8b

let star = ' *'

for (let i = 0; i < 5; i++){
    let result = "";
    for (let j = 0; j < 5 - i; j++){
       result += ' ';
    }
    for (let k = 0; k < i + 1; k++){
        result += star;
    }
    console.log(result);
}

//Zadanie 8c
let count1 = 4;
for (let i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		console.log(' '.repeat(count1) + '*'.repeat(i) + ' '.repeat(count1));
		count1--;
	}
}
//Zadanie 8d

let str = '*1234';
for (j = 0; j <= 11; j++) {
	if (j === 6) {
		console.log('------');
	} else if (j < 6) {
		console.log('*'.repeat(j) + str.slice(j));
	} else {
		console.log('*'.repeat(12 - j) + str.slice(12 - j));
	}
}

// zadanie 8e

let count2 = 4;
for (let i = 1; i <= 6; i++) {
	if (i <= 5) {
		console.log(' '.repeat(count2) + '* '.repeat(i));
		count2--;
	} else {
		console.log('    *');
		console.log('    *');
		console.log('    *');
	}
}