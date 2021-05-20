function solve(input)
{
    let inputType=typeof(input);

    if (inputType==='number') {
        console.log((Math.PI*Math.pow(input,2)).toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

solve(5)
solve('name')