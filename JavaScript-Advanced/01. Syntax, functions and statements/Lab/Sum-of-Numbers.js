function sol(n, m)
{
    let result=0;

    let first=Number(n);
    let second=Number(m);

    for (let i =first; i <= second;i++)
    {
        result+=i;
    }

    console.log(result);
}

sol('1','5');