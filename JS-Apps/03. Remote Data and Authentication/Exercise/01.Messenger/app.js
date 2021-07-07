function attachEvents() {
    let sendButtonElement = document.getElementById('submit');
    let refreshButtonElement = document.getElementById('refresh');
    sendButtonElement.addEventListener('click', sendMessage);
    refreshButtonElement.addEventListener('click', getAllMessages);

    function sendMessage() {
        let author = document.querySelector('input[name="author"]')
            .value;

        let content = document.querySelector('input[name="content"]')
            .value;

        document.querySelector('input[name="author"]').value = '';
        document.querySelector('input[name="content"]').value = '';

        fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                content
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    async function getAllMessages() {

        let messagesRequest = await fetch('http://localhost:3030/jsonstore/messenger');
        let messagesObject = await messagesRequest.json();

        let textBoxElement = document.getElementById('messages');
        let allMessages = [];

        for (const m of Object.values(messagesObject)) {
            let author = m.author;
            let content = m.content;

            allMessages.push(`${author}: ${content}`);
        }

        textBoxElement.textContent = allMessages.join('\n');
    }
}

attachEvents();