// Zadanie 1

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


//Zadanie 3

function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				console.log('End');
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();