function solve(input, n)
{
    let array=[];

    for (let i = 0; i < input.length; i+=n) 
    {
        console.log(input[i]);
        array.push(input[i]);
    }

    return array;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)