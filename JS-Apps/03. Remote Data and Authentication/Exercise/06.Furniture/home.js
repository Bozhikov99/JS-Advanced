let furnitureTableBody = document.querySelector('tbody');
Array.from(furnitureTableBody.children)
    .forEach(c => c.remove());

fetch('http://localhost:3030/data/furniture')
    .then(res => res.json())
    .then(function (res) {
        res.forEach(f => {
            furnitureTableBody.appendChild(createHtmlFurniture(f));
        });
    });

function createHtmlFurniture(f) {
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
    checkboxElement.setAttribute('disabled', 'true');
    checkboxTh.appendChild(checkboxElement);

    currentTr.appendChild(imageTh);
    currentTr.appendChild(nameTh);
    currentTr.appendChild(priceTh);
    currentTr.appendChild(decorationFactorTh);
    currentTr.appendChild(checkboxTh);

    return currentTr;
}