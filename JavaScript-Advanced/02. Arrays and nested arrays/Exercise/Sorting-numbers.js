function solve(input){
    input.sort((a, b)=>a-b);

    let start=0;
    let end=input.length-1;

    let array=[];

    while(start!=end)
    {
        array.push(input[start++]);
        array.push(input[end--]);
    }

    return array;
}

console.log(solve([1, 65, 3, 52, 48, 63,-3, 31, 18, 56]));