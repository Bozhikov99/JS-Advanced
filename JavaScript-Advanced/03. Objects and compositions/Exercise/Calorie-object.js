function solve(input)
{
    const obj={};

    for (let i = 0; i < input.length; i++) {
        obj[input[i]]=Number(input[i+1]);
        i++;
    }

    console.log(obj);
}

solve(['Yoghurt','48','Rise','138','Apple','52']);

