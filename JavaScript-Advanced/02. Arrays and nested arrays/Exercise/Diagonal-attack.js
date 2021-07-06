function solve(input)
{
    let matrix=[];

    input.forEach(r => {
        let currentRow=r.split(' ');
        matrix.push(currentRow.map(x=>x=Number(x)));
    });

    let mainSum=0;
    let revSum=0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum+=matrix[i][i];
        revSum+=matrix[matrix.length-1-i][i];
    }
   
    if (mainSum==revSum) {
        let mainInd=0;
        let revInd=matrix[0].length-1;

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {
                
                let currentX=j;
                let currentY=i;

                if (currentX==mainInd&&currentY==mainInd) {
                    continue;
                }
                if (currentX==revInd) {
                    continue;
                }

                matrix[i][j]=mainSum;
            }
            
            mainInd++;
            revInd--;
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

solve(['5 3 12 3 1',
       '11 4 23 2 5',
       '101 12 3 21 10',
       '1 4 5 2 2',
       '5 22 33 11 1']);