function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchBarElement=document.querySelector('#searchField');
      let listRowsElements=document.querySelectorAll('tbody tr');

      let listRows=Array.from(listRowsElements);
      let searchText=searchBarElement.value;

      listRows.forEach(x=>x.className='');

      let test=listRows[0].textContent;

      let matchingRows=listRows
      .filter(r=>r
         .textContent
         .includes(searchText));

      matchingRows.forEach(element => {
         element.className='select';
      });
   }
}