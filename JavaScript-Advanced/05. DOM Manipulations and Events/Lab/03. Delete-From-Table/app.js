function deleteByEmail() {
    let textElement=document.querySelector('label input');
    let resultElement=document.querySelector('#result');
    let listElements=document.querySelectorAll('tbody tr');

    resultElement.textContent='';

    for (let row of listElements) {
        if (row.children[1].textContent.includes(textElement.value)) {
            row.remove();
            resultElement.textContent='Deleted';
        }
    }

    if (resultElement.textContent=='') {
        resultElement.textContent='Not found.';
    }

}