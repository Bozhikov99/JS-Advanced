function solve(first, second, third)
{
    let max;

    if (first>second&&first>third) 
    {
        max=first
    }
    else if (second>first&&second>third) 
    {
        max=second;
    }
    else 
    {
        max=third;
    }

    console.log(`The largest number is ${max}.`)
}