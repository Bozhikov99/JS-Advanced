function solve(input)
{
    let sumResult=0;
    let inverseResult=0;
    let concat='';

    for (let i = 0; i < input.length; i++)
    {
        sumResult+=Number(input[i]);
        inverseResult+=1/Number(input[i]);
        concat+=input[i];
    }

    console.log(sumResult);
    console.log((inverseResult).toFixed(4))
    console.log(concat);
}

solve([1,2,3]);