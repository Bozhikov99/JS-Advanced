function solve(inputArr)
{
    let rows=inputArr[0];
    let cols=inputArr[1];

    let y=inputArr[2];
    let x=inputArr[3];

    let matrix=[];
;

    for (let row = 0; row < rows; row++) {
        let current=[];

        for (let col = 0; col < cols; col++) {
            current.push(0);
        }

        matrix.push(current);
    }

    matrix[y][x]=1;

    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(Math.abs(y - row),Math.abs(x - col)) + 1    
        }
        
    }

    matrix.forEach(r=>console.log(r.join(' ')));
}

solve([4, 4, 3, 2]);