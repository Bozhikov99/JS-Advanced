function toggle() {
    let buttonElement=document.querySelector('.button');
    let textElement=document.querySelector('#extra');

    let buttonText=buttonElement.textContent;

    if (buttonText=='More') 
    {
        buttonText='Less';
        textElement.style.display='block';
    }
    else
    {
        buttonText='More';
        textElement.style.display='none';
    }

    buttonElement.textContent=buttonText;

}