function solve(stepInput, footprintInput, speedInput)
{
    let steps=stepInput;
    let footprint=footprintInput;
    let speed=speedInput*1000/3600;

    let distance=Number(steps)*Number(footprint);
    let rests=Math.trunc(Number(distance/500));

    let time=distance/speed+rests*60;
    
    console.log(time);
}

solve(4000, 0.60, 5);