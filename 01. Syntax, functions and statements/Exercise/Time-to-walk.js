function solve(stepInput, footprintInput, speedInput)
{
    let speed=speedInput/3.6;

    let distance=stepInput*footprintInput;
    let rests=Math.trunc(Number(distance/500));

    let time=distance/speed+rests*60;

    let hours=Math.trunc(time/3600);
    let minutes=Math.trunc(time/60);
    let seconds=Math.round(time%60);

    console.log(`${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`)
}

solve(4000, 0.60, 5);
//solve(2564, 0.70, 5.5);