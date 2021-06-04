function search() {
   let searchElement=document.getElementById('searchText');
   let listElement=document.getElementById('towns');
   let resultElement=document.getElementById('result');

   let searchText=searchElement.value;
   let result='';

   let townsElements=listElement.children;
   let towns=Array.from(townsElements);

   for (let town of towns) {
      town.style.textDecoration='none';
      town.style.fontWeight='normal';
   }

   let count=0;

   for (let town of towns) {
      if (town.textContent.includes(searchText)) {
         town.style.textDecoration='underline';
         town.style.fontWeight='bold';
         count++;
      }
   }

   resultElement.textContent=`${count} matches found`;

}
