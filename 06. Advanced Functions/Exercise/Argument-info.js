function info(...input){

    let typesObj={};

    for (let t of input) {
        let currentType=typeof(t);
        
        if (!typesObj[currentType]) {
            typesObj[currentType]=0;
        }

        typesObj[currentType]++;

        printCurrent(currentType, t);
    }

    let test=Object.entries(typesObj).sort((a, b)=> b[1]-a[1])

    for (const type of test) {
        console.log(`${type[0]} = ${[type[1]]}`);
    }


    function printCurrent(type, value){
        console.log(`${type}: ${value}`);
    }
}

info('cat', 42, function () { console.log('Hello world!');})