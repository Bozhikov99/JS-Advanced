function solve() {
    let convertElement = document.querySelector('#container button');
    let toElement = document.querySelector('#selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    toElement.appendChild(binaryOption);

    let hexaOption = document.createElement('option');
    hexaOption.textContent = 'Hexadecimal';
    hexaOption.value = 'hexadecimal';
    toElement.appendChild(hexaOption);

    convertElement.addEventListener('click', () => {

        let input = document.querySelector('#input');
        let inputValue = Number(input.value);

        let resultElement = document.querySelector('#result');

        let toDroplist = document.querySelector('#selectMenuTo');
        let selectedFormat = toDroplist.value;

        if (selectedFormat == 'binary') {

            let result = inputValue.toString(2);
            resultElement.value = result;
        } else if (selectedFormat == 'hexadecimal') {

            let result = inputValue.toString(16).toUpperCase();
            resultElement.value = result;
        }
    });
}