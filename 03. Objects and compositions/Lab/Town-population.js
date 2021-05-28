function solve(input){

    let register=[];

    for (const key in input)
    {
        let entry=input[key].split(' <-> ');
        let cityName=entry[0];
        let population=Number(entry[1]);

        if (register[entry[0]])
        {
            register[cityName]+=population;    
        }
        else
        {
            register[cityName]=population;
        }
    }

    for (let c in register) {
        console.log(`${c} : ${register[c]}`);
    }
}

solve(['Sofia <-> 1200000',
       'Montana <-> 20000',
       'New York <-> 10000000',
       'Washington <-> 2345000',
       'Las Vegas <-> 1000000',
       'Washington <-> 1'])