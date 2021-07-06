function attachEventsListeners() {
    let hoursButton=document.getElementById('hoursBtn');
    let minsButton=document.getElementById('minutesBtn');
    let daysButton=document.getElementById('daysBtn');
    let secondsButton=document.getElementById('secondsBtn');

    let hoursInput=document.getElementById('hours');
    let minsInput=document.getElementById('minutes');
    let daysInput=document.getElementById('days');
    let secondsInput=document.getElementById('seconds');

    hoursButton.addEventListener('click', ()=>{
        minsInput.value=hoursInput.value*60;
        daysInput.value=hoursInput.value/24;
        secondsInput.value=minsInput.value*60;
    });

    minsButton.addEventListener('click', ()=>{
        hoursInput.value=minsInput.value/60;
        daysInput.value=hoursInput.value/24;
        secondsInput.value=minsInput.value*60;
    });

    secondsButton.addEventListener('click', ()=>{
        minsInput.value=secondsInput.value/60;
        hoursInput.value=minsInput.value/60;
        daysInput.value=hoursInput.value/24;
    });

    daysButton.addEventListener('click', ()=>{
        hoursInput.value=daysInput.value*24;
        minsInput.value=hoursInput.value*60;
        secondsInput.value=minsInput.value*60;
    });
}