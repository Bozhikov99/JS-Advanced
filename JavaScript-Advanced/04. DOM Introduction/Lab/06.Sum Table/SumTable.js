function sumTable() {
    let table=document.querySelectorAll('table tr');
    let sum=0;

    for (let i = 1; i < table.length; i++) {
        let currentCols=table[i].children;
        let currentNum=currentCols[1].textContent;

        sum+=Number(currentNum);
    }
   

    let sumElement=document.getElementById('sum');
    sumElement.textContent=sum;
}