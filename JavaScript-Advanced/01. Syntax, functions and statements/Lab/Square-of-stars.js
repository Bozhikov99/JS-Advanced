function solve(input = 5)
{
    for(let i=0;i<input;i++)
    {
        let line='';
        for(let k=0; k<input-1;k++)
        {
            line+='* ';
        }
        line+='*';
        console.log(line);
    }
}

solve(5)