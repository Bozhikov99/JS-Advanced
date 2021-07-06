function validate() {

    let submitButton = document.querySelector('#submit');
    let companyCheckBox = document.querySelector('#company');

    submitButton.addEventListener('click', validateInputs);
    companyCheckBox.addEventListener('change', validateCompanyNumber);

    function validateInputs(e) {
        e.preventDefault();

        let inputs=Array.from(document.querySelectorAll('input'));
        let usernameInput = document.querySelector('#username');
        let emailInput = document.querySelector('#email');
        let passwordInput = document.querySelector('#password');
        let confirmPasswordInput = document.querySelector('#confirm-password');
        let validElement=document.querySelector('#valid');

        let companyInfoElement = document.querySelector('#companyInfo');

        let userPattern = /^([A-Za-z0-9]){3,20}$/;
        let emailPattern = /^.*@.*\..*$/;
        let passwordPattern = /^(\w){5,15}$/;

        let passwordsMatch = passwordInput.value.match(passwordPattern) &&
            passwordInput.value === confirmPasswordInput.value;

        borderSet(usernameInput, usernameInput.value.match(userPattern));
        borderSet(emailInput, emailInput.value.match(emailPattern));
        borderSet(passwordInput, passwordInput.value.match(passwordPattern));
        borderSet(confirmPasswordInput, passwordsMatch);

        if (companyInfoElement.style.display == 'block') {

            let companyNumberInput = document.querySelector('#companyNumber');
            let companyNumber=companyNumberInput.value;

            let isValidCompanyNum;

            if (companyNumber >= 1000 && companyNumber <= 9999) {
                isValidCompanyNum = true;
            } else {
                isValidCompanyNum = false;
            }

            borderSet(companyNumberInput, isValidCompanyNum);
        }

        if (!inputs.some(x=>x.style.borderColor=='red')) {
            
            validElement.style.display='block';
        } else {
            validElement.style.display='none';
        }

    }

    function validateCompanyNumber(e) {

        let companyInfoElement = document.querySelector('#companyInfo');
        let checkBox = e.target;
        companyInfoElement.style.display = checkBox.checked ? 'block' : 'none';
    }

    function borderSet(element, isValid) {

        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red');
        }
    }

}
