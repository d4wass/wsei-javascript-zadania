//Zadanie 1

let hello = 'Cześć po raz ';
let counter = 1;

const sayHello = () => {
    console.log(hello + counter)
    counter++

    if (counter >= 16) {
        clearInterval(interval)
    }
}

const interval = setInterval(sayHello, 3000);

//Zadanie 2

let array = [1,2,3,4,5,6,7];
let counter = 0
let interval;

const showElement = () => {
	console.log(array[counter]);
	counter++;

	if(counter >= array.length){
		clearInterval(interval);
	}
}

setTimeout(() => {
    array.forEach(el => console.log(el))
    interval = setInterval(showElement, 3000);
}, 2000);