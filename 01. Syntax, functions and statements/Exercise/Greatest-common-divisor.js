function solve(first, second)
{
    let a=Number(first);
    let b=Number(second);
    let c=a>b?a:b;

    for (let index = c; index >0; index--)
    {
        if (a%index==0&&b%index==0)
        {
            console.log(index);    
            break;
        }
    }
}

solve(15,5)