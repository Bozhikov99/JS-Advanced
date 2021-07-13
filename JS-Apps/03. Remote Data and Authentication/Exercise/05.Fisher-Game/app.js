function attachEvents() {

    if (localStorage.getItem('token') && localStorage.getItem('token') != undefined) {
        logOutButton();

        document.getElementById('guest')
            .style.display = 'none';

        let logOutButtonElement = document.getElementById('log-out');
        logOutButtonElement.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('guest')
                .style.display = 'inline';

            logOutButtonElement.remove();

            localStorage.clear();      
        })
    }



    let loadButtonElement = document.querySelector('aside .load');
    loadButtonElement.addEventListener('click', loadCatches);

    let addButtonElement = document.querySelector('aside .add');

    if (localStorage.getItem('token') && localStorage.getItem('token') != undefined) {
        addButtonElement.removeAttribute('disabled');
    }
    addButtonElement.addEventListener('click', createCatch);
    console.log(addButtonElement);

    async function loadCatches() {
        let catchesRequest = await fetch('http://localhost:3030/data/catches')
        let catchesList = await catchesRequest.json();

        let catchesDivElement = document.getElementById('catches');

        Array.from(catchesDivElement.children)
            .forEach(c => c.remove());

        catchesList.forEach(c => {
            catchesDivElement.appendChild(renderCatchHTML(c));
        });
    }

    function renderCatchHTML(c) {
        let catchDiv = document.createElement('div');
        catchDiv.classList.add('catch');
        catchDiv.id = c._id;
        catchDiv.setAttribute('ownerId', c._ownerId);

        let anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';

        let anglerInput = document.createElement('input');
        anglerInput.type = 'text';
        anglerInput.classList.add('angler');
        anglerInput.value = c.angler;

        let hr1 = document.createElement('hr');

        let weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';

        let weightInput = document.createElement('input');
        weightInput.type = 'number';
        weightInput.classList.add('weight');
        weightInput.value = c.weight;

        let hr2 = document.createElement('hr');

        let speciesLabel = document.createElement('label');
        speciesLabel.textContent = 'Species';

        let speciesInput = document.createElement('input');
        speciesInput.type = 'text';
        speciesInput.classList.add('species');
        speciesInput.value = c.species;

        let hr3 = document.createElement('hr');

        let locationLabel = document.createElement('label');
        locationLabel.textContent = 'Location';

        let locationInput = document.createElement('input');
        locationInput.type = 'text';
        locationInput.classList.add('location');
        locationInput.value = c.location;

        let hr4 = document.createElement('hr');

        let baitLabel = document.createElement('label');
        baitLabel.textContent = 'Bait';

        let baitInput = document.createElement('input');
        baitInput.type = 'text';
        baitInput.classList.add('bait');
        baitInput.value = c.bait;

        let hr5 = document.createElement('hr');

        let captureTimeLabel = document.createElement('label');
        captureTimeLabel.textContent = 'Capture Time';

        let captureTimeInput = document.createElement('input');
        captureTimeInput.type = 'number';
        captureTimeInput.classList.add('captureTime');
        captureTimeInput.value = c.captureTime;

        let hr6 = document.createElement('hr');

        let updateButton = document.createElement('button');

        updateButton.classList.add('update');
        updateButton.textContent = 'Update';
        updateButton.disabled = c._ownerId === localStorage.getItem('userId') ? false : true;
        updateButton.addEventListener('click', updateCatch);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('disabled', 'true');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.disabled = c._ownerId === localStorage.getItem('userId') ? false : true;
        deleteButton.addEventListener('click', deleteCatch);

        catchDiv.appendChild(anglerLabel);
        catchDiv.appendChild(anglerInput);
        catchDiv.appendChild(hr1);

        catchDiv.appendChild(weightLabel);
        catchDiv.appendChild(weightInput);
        catchDiv.appendChild(hr2);

        catchDiv.appendChild(speciesLabel);
        catchDiv.appendChild(speciesInput);
        catchDiv.appendChild(hr3);

        catchDiv.appendChild(locationLabel);
        catchDiv.appendChild(locationInput);
        catchDiv.appendChild(hr4);

        catchDiv.appendChild(baitLabel);
        catchDiv.appendChild(baitInput);
        catchDiv.appendChild(hr5);

        catchDiv.appendChild(captureTimeLabel);
        catchDiv.appendChild(captureTimeInput);
        catchDiv.appendChild(hr6);

        catchDiv.appendChild(updateButton);
        catchDiv.appendChild(deleteButton);

        return catchDiv;
    }

    async function createCatch() {
        let angler = document.querySelector('#addForm .angler')
            .value;

        let weight = Number(document.querySelector('#addForm .weight')
            .value);

        let species = document.querySelector('#addForm .species')
            .value;

        let location = document.querySelector('#addForm .location')
            .value;

        let bait = document.querySelector('#addForm .bait')
            .value;

        let captureTime = document.querySelector('#addForm .captureTime')
            .value;

        Array.from(document.querySelectorAll('aside #addForm input'))
            .forEach(i => i.value = '');

        let newCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }

        let createCatchRequest = await fetch('http://localhost:3030/data/catches',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(newCatch)
            });

        let createCatchResponse = await createCatchRequest.json();

        let catchesDivElement = document.getElementById('catches');
        catchesDivElement.appendChild(renderCatchHTML(createCatchResponse));
    }

    async function updateCatch(e) {
        let currentCatch = e.target
            .parentElement;

        let angler = currentCatch.querySelector('.angler')
            .value;
        let weight = Number(currentCatch.querySelector('.weight').value);
        let species = currentCatch.querySelector('.species')
            .value;
        let location = currentCatch.querySelector('.location')
            .value;
        let bait = currentCatch.querySelector('.bait')
            .value;
        let captureTime = Number(currentCatch.querySelector('.captureTime').value);

        let updatedCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }

        await fetch(`http://localhost:3030/data/catches/${currentCatch.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(updatedCatch)
        })
    }

    async function deleteCatch(e) {
        let currentCatch = e.target
            .parentElement;

        await fetch(`http://localhost:3030/data/catches/${currentCatch.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            }
        });

        document.getElementById('catches')
            .removeChild(currentCatch);
    }

    function logOutButton() {
        let header = document.querySelector('header nav');

        let button = document.createElement('div');
        button.id = 'log-out';

        let anchor = document.createElement('a');
        anchor.href = './index.html';
        anchor.textContent = 'Logout';

        button.appendChild(anchor);
        header.appendChild(button);
    }
}

attachEvents();

