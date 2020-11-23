// Zadanie 1

let truly = true;
let falsy = false;

console.log(truly == falsy); // false - operator porównania, porównuje wartości zmiennych bez względu na ich typ
console.log(truly === falsy); // false - operator porównania identyczności, porównuje typy zmiennych i warotści


//Zadanie 2

let firstNumber = 2;
let secondNumber = 20;
let moduloResult = 0;

moduloResult = firstNumber % secondNumber;
console.log(moduloResult) // 2

//Zadanie 3

let firstString = "first typical string";
let secondString = "second typical string";
let stringsResult = "";

stringsResult = firstString + secondString;
console.log(stringsResult); // first typical stringsecond typical string

//Zadanie 4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true - operator porówniania 'niedokładny' - porównuje jedynie wartości zmiennych nie biorąc pod uwagę typu danych zadeklarowanych zmiennych
console.log(someNumber === someString); // false - operator porównania 'dokładny' - porównuje zarówno typy danych zapisanych w zmiennych jak i wartości tych zmiennych

//Zadanie 5

let counter = 30;

console.log(counter); // 30
console.log(++counter); // 31
console.log(--counter); // 30

// Zadanie 6

let number = 30;
let anotherNumber = 20;
let result = null;

result = number > anotherNumber;
console.log(result); // true