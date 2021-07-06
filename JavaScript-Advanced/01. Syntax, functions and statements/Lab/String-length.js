function solve(first, second, third)
{
    let totalLength=first.length+second.length+third.length;
    let averageLength=totalLength/3;

    console.log(totalLength);
    console.log(Math.floor(averageLength));
}

solve('chocolate', 'ice cream', 'cake')