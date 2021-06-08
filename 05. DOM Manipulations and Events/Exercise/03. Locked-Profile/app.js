function lockedProfile() {
    let profiles=document.querySelectorAll('.profile');
    let buttons=document.querySelectorAll('.profile button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=>{
            let radioButtonName=`user${i+1}Locked`;
            let radioButton=document.querySelector(`input[name="${radioButtonName}"]:checked`);
            if (radioButton.value==='unlock') 
            {
                let hiddenElement=document.getElementById(`user${i+1}HiddenFields`);
                hiddenElement.style.display=hiddenElement.style.display==='block'?
                'none':'block';
                
                if (buttons[i].textContent=='Show more') 
                {
                    buttons[i].textContent='Hide it';
                }
                else
                {
                    buttons[i].textContent='Show more';
                }

            }
        });
    }
}