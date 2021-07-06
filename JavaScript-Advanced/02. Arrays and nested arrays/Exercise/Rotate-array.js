function solve(array, n)
{
    let rotations=array.length<n?n%array.length:n;

    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }

    console.log(`${array.join(' ')}`);
}

solve(
['1', 
'2', 
'3', 
'4'], 2)

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)