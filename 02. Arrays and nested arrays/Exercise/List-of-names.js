function solve(input){
    input.sort((a, b)=>a[0]-b[0])
    .sort((a, b)=>a[1]-b[1]);

    for (let i = 0; i < input.length; i++) {
        console.log(`${i+1}.${input[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])