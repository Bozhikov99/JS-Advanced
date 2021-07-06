class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;;
        this.email = email;

        this.online = false;
    }

    set online(value) {
        this._online = value;
    }

    render(id) {

        let element = document.getElementById(id);

        let articleElement = document.createElement('article');

        let titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;

        let buttonElement = document.createElement('button');
        let icon = '\u2139';
        buttonElement.textContent = icon;
        buttonElement.addEventListener('click', (e) => {

            let title = e.target.parentElement;

            let infoDiv = e
                .target
                .parentElement
                .parentElement
                .querySelector('.info');

            infoDiv.style.display = infoDiv.style.display == 'none' ? 'block' : 'none';

            if (this._online) {
                title.classList.add('online');
            } else {
                title.classList.remove('online');
                infoDiv.style.display='none';
            }
        });

        let infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.style.display = 'none';

        let phoneSpan = document.createElement('span');
        phoneSpan.textContent = `\u260E ${this.phone}`;

        let emailSpan = document.createElement('span');
        emailSpan.textContent = `\u2709 ${this.email}`;

        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        titleDiv.appendChild(buttonElement);

        articleElement.appendChild(titleDiv);
        articleElement.appendChild(infoDiv);

        element.appendChild(articleElement);


    }
}