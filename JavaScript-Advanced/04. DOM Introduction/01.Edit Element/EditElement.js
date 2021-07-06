function editElement(elementInput, match, replacerInput) {
    const text=elementInput.textContent;
    const matcher=new RegExp(match, 'g');
    const edited=text.replace(matcher, replacerInput);
    elementInput.textContent=edited;
}