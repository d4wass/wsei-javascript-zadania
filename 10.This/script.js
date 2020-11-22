//zadanie 1

const person = {
    name: 'Damian',
    surname: 'W',
    age: 19,
    country: 'Poland',
    city: 'Cracow',

    // zamiast arrow fn lepiej użyć standardowej metody tworzenia funkcji ze względu na użycie this. W arrow fn 
    // this gubi swój kontekst

    showPersonInfo: function(){
        console.log(this.name, this.surname, this.age, this.country, this.city);
    },

    showAgePerson: function () {
        console.log(this.age);
        this.age++
    }
};

const person2 = {
    name: 'Toamsz',
    surname: 'K',
    age: 29,
    country: 'Poland',
    city: 'Warsaw',

    showPersonInfo: function(){
        console.log(this.name, this.surname, this.age, this.country, this.city);
    },

    showAgePerson: function () {
        console.log(this.age);
        this.age++
    }
};

//zadanie 2

person['dishes'] = [];
person2['dishes'] = [];

const showDishes = function(){
    this.dishes.forEach(item => (console.log(item)));
};

const addDishes = function(){
    this.dishes.push(arguments);
};

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