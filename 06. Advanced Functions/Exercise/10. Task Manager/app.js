function solve() {

    let addButtonElement = document.querySelector('#add');

    addButtonElement.addEventListener('click', (e) => {

        e.preventDefault();

        let taskNameInputElement = document.querySelector('#task');
        let descriptionInputElement = document.querySelector('#description');
        let dateInputElement = document.querySelector('#date');

        let taskName = taskNameInputElement.value;
        let description = descriptionInputElement.value;
        let date = dateInputElement.value;

        if (taskName == '' ||
            description == '' ||
            date == '') {

            return
        }

        taskNameInputElement.value = '';
        descriptionInputElement.value = '';
        dateInputElement.value = '';

        let sections = Array.from(document.querySelectorAll('section'));
        let openSection = sections[1];
        let inProgressSection = sections[2];
        let finishedSection = sections[3];

        let tasksDiv = openSection.children[1];
        let inProgressDiv = inProgressSection.children[1];
        let finishedDiv = finishedSection.children[1];

        //creating the HTML structure   
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date}`;

        let taskNameHElement = document.createElement('h3');
        taskNameHElement.textContent = taskName;

        let buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('flex');

        let startButtonElement = document.createElement('button');
        startButtonElement.classList.add('green');
        startButtonElement.textContent = 'Start';

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Delete';

        buttonsDivElement.appendChild(startButtonElement);
        buttonsDivElement.appendChild(deleteButtonElement);

        let taskArticleElement = document.createElement('article');

        taskArticleElement.appendChild(taskNameHElement);
        taskArticleElement.appendChild(descriptionParagraph);
        taskArticleElement.appendChild(dateParagraph);
        taskArticleElement.appendChild(buttonsDivElement);

        deleteButtonElement.addEventListener('click', () => {
            taskArticleElement.remove();
        })

        startButtonElement.addEventListener('click', () => {

            startButtonElement.remove();
            deleteButtonElement.remove();

            let finishButtonElement = document.createElement('button');
            finishButtonElement.classList.add('orange');
            finishButtonElement.textContent = 'Finish';
            finishButtonElement.addEventListener('click', () => {

                buttonsDivElement.remove();
                inProgressDiv.removeChild(taskArticleElement);
                finishedDiv.appendChild(taskArticleElement);
            });

            let newDeleteButtonElement = document.createElement('button');
            newDeleteButtonElement.classList.add('red');
            newDeleteButtonElement.textContent = 'Delete';
            newDeleteButtonElement.addEventListener('click', () => {
                taskArticleElement.remove();
            });

            buttonsDivElement.appendChild(newDeleteButtonElement);
            buttonsDivElement.appendChild(finishButtonElement);

            inProgressDiv.appendChild(taskArticleElement);

        })

        tasksDiv.appendChild(taskArticleElement);
    })
}