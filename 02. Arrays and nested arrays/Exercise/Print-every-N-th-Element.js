function solve(input, n)
{
    let array=[];

    for (let i = 0; i < input.length; i+=n) 
    {
       
        array.push(input[i]);
    }

    return array;
}

solve(
['5', 
'20', 
'31', 
'4', 
'20'], 
2
)