function addItem() {
    let inputElement=document.querySelector('#newItemText');
    let listElement=document.querySelector('#items');

    let newElement=document.createElement('li');
    newElement.textContent=inputElement.value;

    inputElement.value='';

    let deleteAnchor=document.createElement('a');
    deleteAnchor.textContent='[Delete]';
    deleteAnchor.href='#';

    deleteAnchor.addEventListener('click', deleteElement);

    newElement.appendChild(deleteAnchor);
    listElement.appendChild(newElement);

    function deleteElement()
    {
        newElement.remove();
    }
}