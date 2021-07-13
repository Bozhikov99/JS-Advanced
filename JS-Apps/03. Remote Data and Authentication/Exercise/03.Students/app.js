let submitButtonElement = document.getElementById('submit');
submitButtonElement.addEventListener('click', createStudentProfile);
console.log(submitButtonElement);

function createStudentProfile(e) {
    e.preventDefault();

    let formDataValues = Array.from(document.querySelectorAll('.inputs input'))
        .map(i => i.value);

    Array.from(document.querySelectorAll('input'))
        .forEach(i => i.value = '');

    if (formDataValues.some(x => x === '')) {
        return;
    }
    if (isNaN(formDataValues[3]) || isNaN(formDataValues[2])) {
        return;
    }

    let FirstName = formDataValues[0];
    let LastName = formDataValues[1];
    let FacultyNumber = formDataValues[2];
    let Grade = formDataValues[3];

    fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            FirstName,
            LastName,
            FacultyNumber,
            Grade
        })
    })

    getAllStudents();
}

function getAllStudents() {
    fetch('http://localhost:3030/jsonstore/collections/students')
        .then(res => res.json())
        .then(function (res) {
            let students = Object.values(res);

            let tableBodyElement = document.querySelector('tbody');

            for (const s of students) {
                let currentRowElement = document.createElement('tr');

                let firstNameHeader = document.createElement('th');
                firstNameHeader.textContent = s.FirstName;

                let lastNameHeader = document.createElement('th');
                lastNameHeader.textContent = s.LastName;

                let facultyNumHeader = document.createElement('th');
                facultyNumHeader.textContent = s.FacultyNumber;

                let gradeHeader = document.createElement('th');
                gradeHeader.textContent = s.Grade;

                currentRowElement.appendChild(firstNameHeader);
                currentRowElement.appendChild(lastNameHeader);
                currentRowElement.appendChild(facultyNumHeader);
                currentRowElement.appendChild(gradeHeader);
                tableBodyElement.appendChild(currentRowElement);
            }
        })
}