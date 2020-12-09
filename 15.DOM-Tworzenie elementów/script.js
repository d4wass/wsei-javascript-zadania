//zadanie 1

const div = document.createElement('div');
div.innerText = 'To jest nowy element';
document.body.appendChild(div);


// zadanie 2
const list = document.createElement('ul');
const fruits = ['apple', 'banana', 'pineaple', 'lime', 'mango', 'plum']

const addItems = (list, fruits) => {
    for (let i = 0; i < fruits.length; i++){
        const listItem = document.createElement('li');
        listItem.innerText = fruits[i];
        list.appendChild(listItem);
    }
    document.body.appendChild(list);
}

addItems(list, fruits);

//zadanie 3
const btn = document.createElement('button')
btn.innerText = 'run event'
document.body.appendChild(btn)

const removeElements = () => {
    list.innerHTML = ''
    const evenFruits = [...fruits].filter((item, index) => ((index) % 2 === 0))
    evenFruits.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item
        list.appendChild(listItem)
    })
}

btn.addEventListener('click', removeElements)

// zadanie 4

const removeBtn = document.createElement('button')
removeBtn.innerText = 'remove fn button';
removeBtn.addEventListener('click', () => removeBtn.remove())
document.body.appendChild(removeBtn);


// Zadanie 5

const addingElements = (maxLimit = 10) => {
    const randomNumber = Math.floor(Math.random() * maxLimit)

    for (let i = 0; i <= randomNumber; i++){
        const div = document.createElement('div');
        div.innerText = `to jest div numer ${i}`;
        document.body.appendChild(div);
    }
}

addingElements()

// Zadanie 6

// Zadanie 7
const firstList = document.createElement('ul');
const secondList = document.createElement('ul');
const moveBtn = document.createElement('button');
const container = document.createElement('div');

for (let i = 1; i < 7; i++){
    const item = document.createElement('li');
    item.innerText = i;
    firstList.appendChild(item)
}

moveBtn.innerText = 'move';
document.body.appendChild(container)
container.appendChild(firstList)
container.appendChild(moveBtn)
container.appendChild(secondList)

moveBtn.addEventListener('click', () => {
    if (firstList.children.length !== 0) {
        const lastItem = firstList.lastChild;
        secondList.appendChild(lastItem);
    }
})

// Zadanie 8
const form = document.createElement('form');
const formBtn = document.createElement('button');
form.className = 'myForm';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '80%';
form.style.padding = '20px 0';
formBtn.className = 'formBtn';
formBtn.type = 'submit';
formBtn.innerText = 'Create Element';

const formDataList = ['Type element to create', 'Inner text for element', 'Color for text?','How many element create'];

for (let i = 0; i < formDataList.length; i++) {
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = formDataList[i];
	form.appendChild(input);
}
form.appendChild(formBtn);
document.body.appendChild(form);

const createUserElement = (name, text, color, quantity) => {
	for (let i = 0; i < quantity; i++) {
		const el = document.createElement(name);
		el.style.color = color;
		el.innerText = text;
		document.body.appendChild(el);
	}
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { currentTarget } = e;
	const [name, text, color, quantity] = [...currentTarget.elements].map(el => el.value);
	createUserElement(name, text, color, parseInt(quantity));
	form.reset();
});


//zadanie 9

//state for form
let persons = [{ id: 1, name: 'Damian', surname: 'jestgłupi', age: 32, kids: 0 },
    { id: 2, name: 'Damian', surname: 'jestgłupi', age: 32, kids: 0 },
    { id: 3, name: 'Damian', surname: 'jestgłupi', age: 32, kids: 0 }];
const tableHeads = ['id', 'name', 'surname', 'age', 'kids', 'remove'];
//form
const personalForm = document.createElement('form');
//buttons
const submitBtn = document.createElement('button');
const moreBtn = document.createElement('button');
//form render
const inputsPlaceholders = [
    {
        placeholder: 'Imię',
        name: 'name',
        type: 'text'
    },
    {
        placeholder: 'Nazwisko',
        name: 'surname',
        type: 'text'
    },
    {
        placeholder: 'Wiek',
        name: 'age',
        type: 'number'
    },
    {
        placeholder: 'Ilość dzieci',
        name: 'kids',
        type: 'number'
    }
];
inputsPlaceholders.forEach(el => {
    const input = document.createElement('input');
    input.type = el.type;
    input.classList = "personalForm";
    input.name = el.name;
    input.placeholder = el.placeholder;
    personalForm.appendChild(input);
})
//setting and styling elements
personalForm.style.display = 'flex';
personalForm.style.flexDirection = 'column';
personalForm.style.width = '40%';
submitBtn.type = 'submit';
submitBtn.name = 'createTable';
submitBtn.innerText = 'Utwórz'
moreBtn.innerText = "Więcej"
moreBtn.name = 'addPerson';

// add person to state
const addPerson = (e) => {
    e.preventDefault();
    const { currentTarget } = e;
    const [name, surname, age, kids] = [...currentTarget.elements]
    const person = new Object();

    person.id = (persons.length !== 0 ? persons[persons.length - 1].id : 0) + 1

    if (kids.value !== 0 && surname.value !== '' && name.value !== '' && age.value !== 0){
        person.name = name.value
        person.surname = surname.value
        person.age = age.value
        person.kids = kids.value
        persons.push(person);
    } else {
        console.log('fill the form')
    }
    personalForm.reset();
}

const removePerson = (e) => {
    console.log(e.target.id)
    persons = persons.filter(item => item.id !== parseInt(e.target.id))
    const parent = e.target.parentNode.parentNode

    table = parent.parentNode.removeChild(parent)
}

const createRow = (tbody) => {
    persons.forEach(element => {
        const tr = document.createElement('tr')
        const td = document.createElement('td');
        const removeBtn = document.createElement('button');

        for (const [key, value] of Object.entries(element)) {
            const td = document.createElement('td');
            td.innerText = value;
            tr.appendChild(td);
        }

        removeBtn.innerText = 'remove';
        removeBtn.classList = 'remove';
        removeBtn.id = element.id
        td.appendChild(removeBtn);
        tr.appendChild(td);
        tbody.appendChild(tr);

        removeBtn.addEventListener('click', e => removePerson(e))
    })
}

const createTable = () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')

    tableHeads.forEach(item => {
        const th = document.createElement('th');
        th.innerText = item;
        tr.appendChild(th);
    })

    table.id = 'table';

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody)
    document.body.appendChild(table);
    createRow(tbody);
}

personalForm.appendChild(moreBtn);
personalForm.appendChild(submitBtn);

document.body.appendChild(personalForm);

personalForm.addEventListener('click', (e) => {
    if (e.target.name === "addPerson") {
        addPerson(e)
    }
});

personalForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (persons.length !== 0 && !(document.body.contains(document.getElementById('table')))) {
        console.log('tworzę tablicę');
        createTable();
    } else if (document.body.contains(document.getElementById('table'))) {
        console.log('tablica utworzona dodaje kolejne osoby')
        let table = document.getElementById('table')
        document.body.removetable = createTable()
        // table.innerHTML = '';
        // table.innerHTML = createTable();
    }
})

// zadanie 10
const inputs = [...document.querySelectorAll('.personalForm')].filter(input => input.type === 'text');

const upperCaseFn = (e) => {
    console.log(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
}
inputs.forEach(input => input.addEventListener('input', (e) => upperCaseFn(e)))

// Zadanie 11

const getNumbersFromString = (string) => {
    const arr = [...string];
    let result = 0
    arr.forEach(item => {
        if (Number(item)) {
            result += Number(item)
        }
    })
    return result
}

// Zadanie 12
const convertAla = (string) => {
    const div = document.createElement('div');
    let arr = string.split(' ');

    if (!string.includes('ala')) {
        div.innerText = 'Słowo Ala nie występuje w tekście.'
    } else {
        arr.forEach(word => {
            if (word.toLowerCase() === 'ala') {
                word = 'ola'
            }
            div.innerText += word + " "
        })
    }

    document.body.appendChild(div);
}

// Zadanie 13
const stringArrays = (arr) => {
    let result = [];
    arr.forEach(word => {
        result.push(word.length);
    })
    return result;
}
stringArrays(['damian', 'ala', 'a'])

const summary = (arr) => (arr.reduce((a, b) => a + b, 0));
summary(stringArrays(['damian', 'ala', 'a']))

const avg = (arr) => {
    const summary = arr.reduce((a, b) => a + b, 0)
    return summary / arr.length;
}

avg(stringArrays(['damian', 'ala', 'a']))

// Zadanie 14

let defaultObj = {
    name: '',
    surname: '',
    age: ''
}

const newObjValues = (arr) => {
    const resetBtn = document.createElement('button')
    let counter = 0;
    resetBtn.innerText = 'reset obj';
    for (let property in defaultObj) {
        defaultObj[property] = arr[counter];
        defaultObj[`${property} length`] = arr[counter].length
        counter++;

        if (defaultObj[`${property} length`] > 5) {
            document.body.appendChild(resetBtn)
            resetBtn.addEventListener('click', () => {
                defaultObj = {};
                defaultObj.name = ""
                defaultObj.surname = ""
                defaultObj.age = ""
            })
        }
    }


}

newObjValues(['Paweł', 'Gawełs', '23']);