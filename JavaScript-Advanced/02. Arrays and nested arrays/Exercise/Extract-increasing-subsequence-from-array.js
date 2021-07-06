function solve(input)
{
    let array=[];
    let max=Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < input.length; i++) {
        let current=input[i];

        if (current>=max) {
            array.push(input[i]);
            max=current;
        }
    }
    
    return array;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )