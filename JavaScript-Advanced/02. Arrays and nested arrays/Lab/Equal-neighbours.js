function solve(arr)
{
    let count=0;

    for (let i = 0; i < arr.length-1; i++) 
    {
       for (let j = 1; j < arr[i].length; j++) 
       {
           let current=arr[i][j];
           if (current==arr[i+1][j])
           {
               count++;
           }
           else if (current==arr[i][j-1])
           {
               count++;
           }
       }
    }

    for (let i = 0; i < arr.length-1 ; i++) 
    {
        if (arr[i][0]==arr[i+1][0]) {
            count++;
        }
    }

    for (let i = 0; i < arr[arr.length-1].length; i++) 
    {
        if (arr[arr.length-1][i]==arr[arr.length-1][i+1]) {
            count++;
        }
    }


    return count;
}

console.log(solve([['2','2','5','7','4'],
                   ['4','0','5','3','4'],
                   ['2','5','5','4','2']]))