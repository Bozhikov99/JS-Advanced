function solve(input)
{
    input.sort((a, b)=>a.length-b.length||
    a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(x=>console.log(x));
}

solve(
['alpha', 
'beta', 
'gamma']
)