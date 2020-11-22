// Zadanie 1

const wellDone = () => console.log('udało się')

// Zadanie 2

const showParameter = (parameter) => console.log(parameter);

// Zadanie 3

const returnArray = (array) => array;

// Zadanie 4

const showString = (string) => {
    let counter = 0;
	
	 const chceckCounter = () => {
		if (counter === 5) {
        clearInterval(interval);
        console.log("Koniec")
		 }
	 }
	
    const interval = setInterval(() => {
        console.log(string);
        counter++;
		  chceckCounter()
    }, 3000);
}

showString('dameieanaealj');


