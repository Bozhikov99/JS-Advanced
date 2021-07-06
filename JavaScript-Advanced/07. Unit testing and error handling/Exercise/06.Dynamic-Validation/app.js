function validate() {
    
    let inputElement=document.querySelector('#email');

    inputElement.addEventListener('change', validateInput);

    function validateInput(e){

        let text=e.target.value;

        let pattern=/^([a-z]+)@([a-z]+)\.([a-z]+)$/g; 

        if (!text.match(pattern)) {
            e.target.className='error';
        } else { 
            e.target.className='none';
        }
    }
}