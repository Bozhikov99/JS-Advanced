function solve(input)
{
    input.sort((a, b)=> a-b);
    let biggerHalf=input.slice(Math.floor(input.length/2));

    console.log(`[${biggerHalf.join(', ')}]`);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);