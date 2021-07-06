function extractText() {
    let listContent= document.querySelectorAll('#items li');
    let text='';

    for (const l of listContent) {
        text+=l.textContent+'\n';
    }

    text.trimEnd();

    let boxElement=document.querySelector('#result');
    boxElement.textContent=text;

}

extractText()