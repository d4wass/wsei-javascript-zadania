// Zadanie 1

// class Person {
//     constructor(name, surname, age, country, city, language){
//         this.name = name,
//         this.surname = surname,
//         this.age = age,
//         this.country = country,
//         this.city = city,
//         this.language = language    
//     }

//     changeAge(age) {
//         this.age = age;
//     }

//     changeCity(city) {
//         this.city = city;
//     }
// }

// const p1 = new Person('Damian','Kowalski', 32, 'Poland', 'Cracow', 'Polish');
// const p2 = new Person('Tomek','Nowak', 45, 'Cech', 'Prague', 'czech');
// const p3 = new Person('Tom','Cruise', 100, 'United States', 'San Francisco', 'English');
// const p4 = new Person('Carl','Johnes', 25, 'United States', 'San Andreas', 'English');
// const p5 = new Person('Damian', 'Kowalski', 32, 'Poland', 'Cracow', 'Polish');

function Person(name, surname, age, country, city, language) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language   ; 


this.changeAge = function(age) {
    this.age = age;
}

this.changeCity = function(city) {
    this.city = city;
}
}

const p1 = new Person('Damian','Kowalski', 32, 'Poland', 'Cracow', 'Polish');
const p2 = new Person('Tomek','Nowak', 45, 'Cech', 'Prague', 'czech');
const p3 = new Person('Tom','Cruise', 100, 'United States', 'San Francisco', 'English');
const p4 = new Person('Carl','Johnes', 25, 'United States', 'San Andreas', 'English');
const p5 = new Person('Damian', 'Kowalski', 32, 'Poland', 'Cracow', 'Polish');
console.log(p1)

// Zadanie 2
// Każde działanie które zrobi użytkownik ma zostać zapisane do tablicy memory = ['dodawanie', 'odejmowanie', 'mnożenie', 'mnożenie']
// w konsoli ma się pojawiac z każdym działaniem dodawanie odejmowanie itp.

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    if(b == 0){
        console.log("Cannot divide by zero!");
        return;
    }    
    return a / b;
}

function Calculator(){
    this.memory = [];
    this.showMemory = () => console.log(this.memory);
    this.resetMemory = () => this.memory = [];
    this.calculate = (a,b,operation) => {
        this.memory.push(operation(a,b));
        return operation(a,b);
    }
}

let calc = new Calculator();
let kalk = new Calculator();

console.log(calc.calculate(5, 10, add));
console.log(calc.calculate(5, 23, divide));
console.log(calc.memory);

console.log(kalk.calculate(5.3, 10, multiply));
console.log(kalk.calculate(15, 23, subtract));
console.log(kalk.memory);

calc.showMemory();
kalk.resetMemory();
console.log(kalk.showMemory());


// class Calculator {

//     constructor() {
//         this.num1 = null,
//         this.num2 = null,
//         this.result = 0
//         this.history = ""
//     }

//     clearMemory() {
//         this.num1 = null,
//         this.num2 = null,
//         this.result = 0
//         this.history = ""
//     }

//     showMemory() {
//         console.log(this.history);
//     }

//     adding(a, b) {
//         this.history = "";
//         this.num1 = a;
//         this.num2 = b;
//         this.result = a + b;
//         this.history = `${this.num1} + ${this.num2} = ${this.result}`
        
//         return this.result;
//     }

//     odding(a, b) {
//         this.history = "";
//         this.num1 = a;
//         this.num2 = b;
//         this.result = a - b;
//         this.history = `${this.num1} - ${this.num2} = ${this.result}`
        
//         return this.result
//     }

//     multiple(a, b) {
//         this.history = "";
//         this.num1 = a;
//         this.num2 = b;
//         this.result = a * b;
//         this.history += `${this.num1} * ${this.num2} = ${this.result}`

//         return this.result;
//     }

//     divide(a, b) {
//         if (a !== 0 && b !== 0) {
//             this.history = "";
//             this.num1 = a;
//             this.num2 = b;
//             this.result = a / b;
//             this.history += `${this.num1} / ${this.num2} = ${this.result}`;

//             return this.result;
//         }
//     }
// }

// function CalculatorMemory(operand, number1, number2, result) {
//     this.operand = operand;
//     this.number1 = number1;
//     this.number2 = number2;
//     this.result = result;
// }
// CalculatorMemory.prototype.toString = function() {
//     return `${this.number1} ${this.operand} ${this.number2} = ${this.result}`;
// }

// function Calculator() {
//     this.memory = [];
// }
// Calculator.prototype.add = function(number1, number2) {
//     let result = number1 + number2;
//     this.memory.push(new CalculatorMemory('+', number1, number2, result));
//     return result;
// }
// Calculator.prototype.subtract = function(number1, number2) {
//     let result = number1 - number2;
//     this.memory.push(new CalculatorMemory('-', number1, number2, result));
//     return result;
// }
// Calculator.prototype.multiply = function(number1, number2) {
//     let result = number1 * number2;
//     this.memory.push(new CalculatorMemory('*', number1, number2, result));
//     return result;
// }
// Calculator.prototype.divide = function(number1, number2) {
//     if (number2 === 0) {
//         console.log("Dzielenie przez zero, operacja nie dozwolona!");
//     } else {
//         let result = number1 / number2;
//         this.memory.push(new CalculatorMemory('/', number1, number2, result));
//         return result;
//     }
// }
// Calculator.prototype.printMemory = function() {
//     console.log('Memory:');
//     this.memory.forEach((element, index) => {
//         console.log(`${index+1}: ${element}`);
//     });
// }
// Calculator.prototype.clearMemory = function() {
//     this.memory = [];
// }

// let calculator1 = new Calculator();
// let calculator2 = new Calculator();

// calculator1.add(1, 2);
// calculator1.divide(10, 3);

// calculator2.multiply(23, 4);
// calculator2.divide(15, 2);

// calculator1.printMemory();
// calculator2.printMemory();
// calculator2.clearMemory();
// calculator2.printMemory();



//Zadanie 3
//wymienia pola przy pomocy pola proototype nie musi być olać to 
