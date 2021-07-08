function attachEvents() {
    let loadButtonElement = document.getElementById('btnLoad');
    let createButtonElement = document.getElementById('btnCreate');

    loadButtonElement.addEventListener('click', loadContacts);
    createButtonElement.addEventListener('click', createContact);

    async function createContact() {
        let personInput = document.getElementById('person');
        let phoneInput = document.getElementById('phone')

        let person = personInput
            .value;

        let phone = phoneInput
            .value;

        personInput.value = '';
        phoneInput.value = '';

        fetch('http://localhost:3030/jsonstore/phonebook', {
            method: "POST",
            headers: {
                'Content-Type': 'application/js'
            },
            body: JSON.stringify({
                person,
                phone
            })
        });

        (loadContacts)();
    }

    async function loadContacts() {
        let contactsReq = await fetch('http://localhost:3030/jsonstore/phonebook');
        let contacts = await contactsReq.json();

        let phonebookElement = document.getElementById('phonebook');
        Array.from(phonebookElement.children)
            .forEach(c => c.remove());

        for (const c of Object.entries(contacts)) {
            let id = c[0];
            let data = c[1];
            let person = data.person;
            let phone = data.phone;

            let liElement = document.createElement('li');
            liElement.textContent = `${person}: ${phone}`;
            liElement.id = id;

            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.addEventListener('click', deleteContact);

            liElement.appendChild(deleteButtonElement);
            phonebookElement.appendChild(liElement);
        }
    }

    function deleteContact(e) {
        let contactId = e.target
            .parentElement
            .id;

        fetch(`http://localhost:3030/jsonstore/phonebook/${contactId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

attachEvents();