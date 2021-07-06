function solve(array)
{
    let field=[[false, false, false],
               [false, false, false],
               [false, false, false]];

            function hasPlacesLeft()
            {
                for (let i = 0; i < field.length; i++) {
                    for (let j = 0; j < field.length; j++) {
                        if (field[i][j]===false) {
                            return true;
                        }
                        
                    }
                }

                return false;
            }

            function isWon(){
                for (let i = 0; i < field.length;i++) {   
                    if (field[i][0]==field[i][1]&&
                        field[i][1]==field[i][2]&&
                        field[i][0]!=false) {
                        return true;
                    }
                }
    
                for (let i = 0; i < field.length; i++) {
                    if (field[0][i]==field[1][i]&&
                        field[1][i]==field[2][i]&&
                        field[0][i]!=false)
                    {
                        return true    
                    }
                }
    
                if (field[0][0]==field[1][1]&&
                    field[1][1]==field[2][2]&&
                    field[0][0]!=false) {
                    return true;
                }
    
                if (field[0][2]==field[1][1]&&
                    field[1][1]==field[2][0]&&
                    field[0][2]!=false) {
                    return true;
                }
            }

    let isPlayerXTurn=true;
    let output='';
    
    for (const coord of array) 
    {
        let currentCoords=coord.split(' ');
        let x=Number(currentCoords[0]);
        let y=Number(currentCoords[1]);

        if (field[x][y]!=false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        
        if (isPlayerXTurn) {
            field[x][y]='X';
        }
        else
        {
            field[x][y]='O';
        }

        if (isWon()) {
            if (isPlayerXTurn==true) {
                output='Player X wins!';
            }
            else{
                output='Player O wins!';
            }

            break;
        }
        
        if (!hasPlacesLeft()) {
            output='The game ended! Nobody wins :(';
            break;
        }

        isPlayerXTurn=!isPlayerXTurn;
    }


    console.log(output);
    field.forEach(x=>console.log(x.join('\t')));
    
}

//  solve(["0 0",
//      "0 0",
//      "1 1",
//      "0 1",
//      "1 2",
//      "0 2",
//      "2 2",
//      "1 2",
//      "2 2",
//      "2 1"]);

// solve(['0 1',
//     '0 0',
//     '0 2',
//     '2 0',
//     '1 0',
//     '1 1',
//     '1 2',
//     '2 2',
//     '2 1',
//     '0 0'])

solve(['0 1',
       '0 0',
       '0 2',
       '2 0',
       '1 0',
       '1 2',
       '1 1',
       '2 1',
       '2 2',
       '0 0',
    ])

