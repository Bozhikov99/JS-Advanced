function solve(input)
{
    let isMagic=true;
    let sum=input[0].reduce((acc, b)=>acc+=b, 0);

    for (let i=1; i < input.length; i++) {
        let currentSum=input[i].reduce((acc,b)=>acc+b, 0)

        if (currentSum!=sum) {
            return false;
        }
    }

    for (let i = 0; i < input.length; i++) 
    {
        let currentSum=0;

        for (let j = 0; j < input.length; j++) {
            currentSum+=input[i][j];
        }

        if (currentSum!=sum) {
            return false;
        }
    }

    return true;
}

console.log(solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]));

console.log(solve([[11, 32, 45],
   [21, 0, 1],
   [21, 1, 1]]));