function solve(rows, cols)
{
    let matrix=[]

    let maxEl=rows*cols;
    let minEl=0;

    let minRow=0;
    let minCol=0;

    let maxRow=rows-1;
    let maxCol=cols-1;

    for (let i = 0; i < rows; i++) matrix[i]=[];

    while(minEl<maxEl)
    {
        for (let i = minCol; i <= maxCol; i++) {
            matrix[minRow][i]=++minEl;
        }
        minRow++;

        for (let i = minRow; i <= maxRow; i++){
            matrix[i][maxCol]=++minEl;
        }
        maxCol--;
        
        for (let i = maxCol; i >= minCol; i--) {
            matrix[maxRow][i]=++minEl
        }
        maxRow--;

        for (let i = maxRow; i >= minRow; i--) {
            matrix[i][minCol]=++minEl;         
        }
        minCol++;
    }

    matrix.forEach(r=>console.log(r.join(' ')));
}

solve(5, 5)