function create(words) {
   let contentElement=document.querySelector('#content');

   for (const w of words) {
      let currentSection=document.createElement('div');

      let currentParagraph=document.createElement('p');
      currentParagraph.textContent=w;
      currentParagraph.style.display='none';

      currentSection.appendChild(currentParagraph);

      currentSection.addEventListener('click', (e)=>{
         currentSection.children[0]
         .style
         .display='inline';
      });
      contentElement.appendChild(currentSection);
   }
}