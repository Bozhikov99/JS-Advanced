function validate() {
    let inputElement=document.querySelector('#email');
    let pattern=new RegExp('[a-z]+@[a-z]+\.[a-z]+','g');

    inputElement.addEventListener('change', changeStlye);

    function changeStlye()
    {
        let input=inputElement.value;
        let wtf=pattern.test(input);
        if (!wtf) 
        {
           inputElement.className='error';
        } else {
            inputElement.className='none';
        }
    }
}