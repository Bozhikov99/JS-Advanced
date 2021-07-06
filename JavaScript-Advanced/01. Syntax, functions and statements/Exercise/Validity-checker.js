function solve(x1Input, y1Input, x2Input, y2Input)
{
    let x1=Number(x1Input);
    let x2=Number(x2Input);
    let y1=Number(y1Input);
    let y2=Number(y2Input);

    function distance(x1, y1, x2, y2)
    {
        return Math.sqrt((x2-x1)**2+(y2-y1)**2);
    }

    if (Number.isInteger(distance(x1,y1,0,0)))
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (Number.isInteger(distance(x2,y2,0,0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distance(x1,y1,x2,y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);