let furnitureTableBody = document.querySelector('tbody');

Array.from(furnitureTableBody.children)
    .forEach(c => c.remove());

document.getElementById('name-span')
    .textContent = '';

document.getElementById('price-span')
    .textContent = ``;

fetch('http://localhost:3030/data/furniture')
    .then(res => res.json())
    .then(res => res.forEach(f => furnitureTableBody.appendChild(createFurnitureHtml(f))));

let form = document.querySelector('.col-md-12 form');
let createbuttonElement = form.querySelector('button');
let buyButtonElement = document.querySelector('#buy');
let ordersButtonElement = document.querySelector('#orders');
let logoutButtonElement = document.querySelector('#logoutBtn');

createbuttonElement.addEventListener('click', createFurniture);
buyButtonElement.addEventListener('click', buyFurniture);
ordersButtonElement.addEventListener('click', getOrders);
logoutButtonElement.addEventListener('click', () => {
    localStorage.clear();
    location.assign('./home.html');
})


function createFurniture(e) {
    e.preventDefault();

    let formData = new FormData(form);
    let imageLink = formData.get('img');
    let name = formData.get('name');
    let price = Number(formData.get('price'));
    let factor = Number(formData.get('factor'));

    if (!formData || !name
        || !price
        || !factor) {
        console.error('Invalid data!');
        return;
    }

    if (isNaN(price) || isNaN(factor)) {
        console.error('Invalid data!');
        return;
    }

    Array.from(document.querySelectorAll('.col-md-12 form input'))
        .forEach(i => i.value = '');

    fetch('http://localhost:3030/data/furniture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('auth_token')
        },
        body: JSON.stringify({
            imageLink,
            name,
            price,
            factor
        })
    })
        .then(res => res.json())
        .then(res => furnitureTableBody.appendChild(createFurnitureHtml(res)));
}

function buyFurniture() {
    let markedFurniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(c => c.parentElement
            .parentElement);


    markedFurniture.forEach(f => {
        let paragraphs = Array.from(f.querySelectorAll('td p'));
        let name = paragraphs[0]
            .textContent;

        let price = Number(paragraphs[1]
            .textContent);

        fetch('http://localhost:3030/data/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({
                name,
                price
            })

        })
            .then(res => res.json())
            .then(res => console.log(res));
    })
}

function getOrders() {

    let url = `http://localhost:3030/data/orders?where=_ownerId%3D"${localStorage.getItem('userId')}"`;
    fetch(url)
        .then(res => res.json())
        .then(res => {

            if (res.length == 0) {
                document.getElementById('name-span')
                    .textContent = 'none';

                document.getElementById('price-span')
                    .textContent = '0 $';
            } else {
                let names = [];

                res.forEach(f => names.push(f.name));
                let totalSum = res.reduce((acc, x) => acc += x.price, 0);

                document.getElementById('name-span')
                    .textContent = names.join(', ');

                document.getElementById('price-span')
                    .textContent = `${totalSum} $`;
            }
        })
        .catch(err => console.error(err))
}

function createFurnitureHtml(f) {
    let currentTr = document.createElement('tr');

    let imageTh = document.createElement('td');
    let imageElement = document.createElement('img');
    imageElement.src = f.imageLink;
    imageTh.appendChild(imageElement);

    let nameTh = document.createElement('td');
    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = f.name;
    nameTh.appendChild(nameParagraph);

    let priceTh = document.createElement('td');
    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = f.price;
    priceTh.appendChild(priceParagraph);

    let decorationFactorTh = document.createElement('td');
    let decorationParagraph = document.createElement('p');
    decorationParagraph.textContent = f.factor;
    decorationFactorTh.appendChild(decorationParagraph);

    let checkboxTh = document.createElement('td');
    let checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxTh.appendChild(checkboxElement);

    currentTr.appendChild(imageTh);
    currentTr.appendChild(nameTh);
    currentTr.appendChild(priceTh);
    currentTr.appendChild(decorationFactorTh);
    currentTr.appendChild(checkboxTh);

    return currentTr;
}