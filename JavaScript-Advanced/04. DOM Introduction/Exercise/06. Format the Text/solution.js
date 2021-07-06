function solve() {
  let inputElement=document.querySelector('#input');
  let outputElement=document.querySelector('#output');

  let inputSentences=inputElement
  .value
  .split('.')
  .filter(x=>x!=='')
  .map(x=>x+'.');

  let paragraphsCount=Math.ceil(inputSentences.length/3);

  for (let i = 0, c=0; i < paragraphsCount; i++) {
    
    let paragraph='<p>';

    for (let j = 0; j < 3; ++j) {
      if (inputSentences[c]!==undefined) {
        paragraph+=inputSentences[c];
        c++;
      } else {
        break;
      }
    }

    paragraph+='</p>';

    outputElement.innerHTML+=paragraph;
  }

}