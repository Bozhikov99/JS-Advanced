function solve(input)
{
    let firstDiagonal=0;
    let secondDiagonal=0;
    let reverse=input.length-1;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal+=input[i][i];
        secondDiagonal+=input[i][reverse-i];
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

solve([[20, 40],[10, 60]])