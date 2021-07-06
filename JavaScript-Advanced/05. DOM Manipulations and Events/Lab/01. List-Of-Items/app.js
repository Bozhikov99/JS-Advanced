function addItem() {
    let newTextElement=document.querySelector('#newItemText');
    let listElement=document.querySelector('#items');

    let newElement=document.createElement('li');
    newElement.textContent=newTextElement.value;

    listElement.appendChild(newElement);

    newTextElement.value='';

}