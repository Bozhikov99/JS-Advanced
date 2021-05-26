function solve(input)
{
    let newArr=input.filter(x=>{
        input.indexOf(x%2==1).map(x=>x*=2);
        
    });
    console.log(newArr);
    return newArr;
}

solve([10, 15, 20, 25])