function generateReport() {
    let thElements=document.querySelectorAll('th');
    let trElements=document.querySelectorAll('tbody tr');
    let outputElement=document.querySelector('#output');

    let thProperties=[];
    let trObjs=[];

    Array.from(thElements).forEach(x=>{
        if (x.children[0].checked) {
            thProperties.push(x.textContent.toLowerCase().trim());
        } else {
            thProperties.push(false);
        }
    });

    Array.from(trElements).forEach(x=>{

        let currentObj={};

        Array.from(x.children).forEach((y, i)=>{

            if (thProperties[i]) {
                let currentCell=thProperties[i];   
                currentObj[currentCell]=y.textContent;
            }
        });

        trObjs.push(currentObj);

    });

    outputElement.textContent=JSON.stringify(trObjs);
}