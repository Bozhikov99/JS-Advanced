function solve(input)
{
    let numString=String(input);
    let startChar=numString[0];

    let sum=0;
    let isSame=true;
    
    for (let index = 0; index < numString.length; index++) 
    {
        if (numString[index]!=startChar)
        {
            isSame=false;
        }

        sum+=Number(numString[index]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222)