function attachEventsListeners() {
    let buttonElement=document.querySelector('#convert');
    
    buttonElement.addEventListener('click', ()=>{
        let fromElement=document.querySelector('#inputUnits');
        let toElement=document.querySelector('#outputUnits');
        let inputElement=document.querySelector('#inputDistance');
        let outputElement=document.querySelector('#outputDistance')
    
        let inputMeters=inputElement.value;
    
        if (fromElement.value=='km') {
            inputMeters*=1000;
        }
        else if (fromElement.value=='cm'){
            inputMeters/=100;
        }
        else if (fromElement.value=='mm'){
            inputMeters/=1000;
        }
        else if (fromElement.value=='mi'){
            inputMeters*=1609.34;
        }
        else if (fromElement.value=='in'){
            inputMeters*=0.0254;
        }
        else if (fromElement.value=='yrd'){
            inputMeters*=0.9144;
        }
        else if (fromElement.value=='ft'){
            inputMeters*=0.3048;
        }

        if (toElement.value=='km') {
            inputMeters/=1000;
        }
        else if (toElement.value=='cm') {
            inputMeters*=100;
        }
        else if (toElement.value=='mm') {
            inputMeters*=1000;
        }
        else if (toElement.value=='mi') {
            inputMeters/=1609.34;
        }
        else if (toElement.value=='in') {
            inputMeters/=0.0254;
        }
        else if (toElement.value=='yrd') {
            inputMeters/=0.9144;
        }
        else if (toElement.value=='ft') {
            inputMeters/=0.3048;
        }

        outputElement.value=inputMeters;
    });
}
