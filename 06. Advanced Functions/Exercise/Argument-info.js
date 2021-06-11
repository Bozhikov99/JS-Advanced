function info(...input){

    let typesObj={};

    for (let t of input) {
        let currentType=typeof(t);
        
        if (!typesObj[currentType]) {
            typesObj[currentType]=0;
        }

        typesObj[currentType]++;
        console.log(`${currentType}: ${t}`);
    }

    let test=Object.keys(typesObj)
    .sort((a, b)=> typesObj[b]-typesObj[a])
    .forEach(x=>console.log(`${x}: ${typesObj[x]}`))

}

info(1,'cat', 42, function () { console.log('Hello world!');})