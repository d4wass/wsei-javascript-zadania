//zadanie 1

function Person(firstName, secondName, age, country, city) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;
}

const person = new Person("Tomasz", "Nowak", 29, "Polska", "Kraków");
const person1 = new Person("Marsia", "Odzdzisia", 49, "Polska", "Warszawa");

console.log(person);
console.log(person1);

//zadanie 2

person['dishes'] = [];
person1['dishes'] = [];

console.log(person);
console.log(person1);

const showDishes = function(){
    this.dishes.forEach(item => (console.log(item)));
};

const addDishes = function(){
    this.dishes.push(arguments);
};

person['showDishes'] = showDishes;
person1['showDishes'] = showDishes;
person['addDishes'] = addDishes;
person1['addDishes'] = addDishes;

person.addDishes("dish", "dish1", "dish2")
person1.addDishes("dish", "dish1", "dish2", "dish3")
person.showDishes();
person1.showDishes();

// zadanie 3

const calculator = {
    a:0,
    b:0,

    saveNumbers: function (numberA, numberB) {
        this.a = numberA;
        this.b = numberB;
    },

    addingNumbers: function () {
        const result = this.a + this.b;
        return result;
    },

    oddingNumbers: function () {
        const result = this.a - this.b;
        return result;
    },

    multiplyNumbers: function () {
        const result = this.a * this.b;
        return result;
    },

    divideNumbers: function () {
        if (this.b > 0) {
            const result = this.a / this.b;
            return result;
        } else {
            console.log('divide by 0, error')
        }
    },
}

// Zadanie 4

const ladder = {
	isOnLader: false,
	step: 0,
	climbLadder() {
		this.isOnLader = true;
	},
	getOff() {
		if (this.step === 0) {
			this.isOnLader = false;
		} else {
			console.log('Go down to the lowest step');
		}
	},
	goUp() {
		if (this.isOnLader) {
			this.step += 1;
		} else {
			console.log('Climb at your ladder.');
		}
	},
	goDown() {
		if (this.step === 0) {
			console.log('You cannot go down.');
			return this.getOff();
		}
		this.step -= 1;
	},
};

console.log(ladder);
ladder.goUp();
ladder.climbLadder();
ladder.goUp();
ladder.goUp();
console.log(ladder);
ladder.getOff();
ladder.goDown();
ladder.goDown();
console.log(ladder);
ladder.goDown();
ladder.getOff();
ladder.goUp();
