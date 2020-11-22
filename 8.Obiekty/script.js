// Zadanie 1 i 2 i 4 - tutaj w drugim coś było innego trzeba to sprawdzić zmienić nazwę a nie wyświetlić

const car = {
    producent:'BMW', 
    model: '330 Ci',
    hp: 180,
    rwd: true,
    fwd: false,
    doors: 3,
    maxSpeed: '180 km/h',    
    engine: {
        cylinders: 4,
        capacity: 3000
    },
    
    showName: function() {
        console.log(`${this.producent} ${this.model}`);
    }
}

for (const property in car){
    console.log(`${property}: ${car[property]}`);
}

// Zadanie 3

    const example = {
        sum: null,
        summaryArray: function (array) {
            this.sum = array.reduce((a, b) => a + b)
            console.log(this.sum)
        }
    }

// Zadanie 5

for (const property in car.engine) {
    console.log(`${property}: ${car.engine[property]}`);
}

// Zadanie 6

car.color = "blue"
car.hello = function () {
    console.log('hello');
}

car.hello();