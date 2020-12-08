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
    { id: 3, name: 'Damian', surname: 'jestgłupi', age: 32, kids: 0 }]
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
    input.name = el.name;
    input.placeholder = el.placeholder;
    personalForm.appendChild(input);
})
// add person to state
const addPerson = (e) => {
    e.preventDefault();
    const { currentTarget } = e;
    const [age, kids, surname, name] = [...currentTarget.elements]
    const person = new Object();

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

const createTableRow = (persons, tbody) => {
    persons.forEach( person => {
        const tr = document.createElement('tr');
        const tdBtn = document.createElement('td');
        const removeButton = document.createElement('button');
        tdBtn.style.border = '1px solid black';

        for (const [key, value] of Object.entries(person)) {
            const td = document.createElement('td');
            td.style.border = '1px solid black';
            console.log(key, value)
            console.log();
            td.innerText = value
            tr.appendChild(td);
        }
        removeButton.innerText = 'remove';
        removeButton.addEventListener('click', () => removePerson(e));
        removeButton.id = person.id

        tdBtn.appendChild(removeButton);
        tr.appendChild(tdBtn)
        tbody.appendChild(tr)
    })
}

const createTable = (e, persons) => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trhead = document.createElement('tr');
    const heads = ['Imię', 'Nazwisko', 'Wiek', 'Ilość dzieci', 'remove']

    heads.forEach(item => {
        const th = document.createElement('th');
        th.style.border = '1px solid black';

        th.innerText = item;
        trhead.appendChild(th);
    })

    createTableRow(persons, tbody);

    table.id = "table"

    thead.appendChild(trhead)
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

const removePerson = (e) => {
    const element = document.getElementById('table');
    persons = persons.filter(item => item.id != e.target.id);

    if (persons.length === 0) {
        element.parentNode.removeChild(element);
    }
    else {
        // element.parentNode.removeChild(element);
        document.body.appendChild(createTable(e, persons));
    }
}

personalForm.style.display = 'flex';
personalForm.style.flexDirection = 'column';
personalForm.style.width = '40%';

submitBtn.type = 'submit';
submitBtn.name = 'createTable';
submitBtn.innerText = 'Utwórz'
moreBtn.innerText = "Więcej"
moreBtn.name = 'addPerson';

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
    const elementExists = document.getElementById("table");
    if (persons.length !== 0) {
        const content = createTable(e, persons);
        document.body.appendChild(content);
    } else if (document.body.contains(elementExists)) {
        const tbody = document.createElement('tbody');
        const content = createTableRow(e, persons,tbody);
        elementExists.appendChild(content)
    }
})