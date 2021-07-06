function solve(input)
{
    let max=Number.MIN_SAFE_INTEGER;
    console.log(max);
    for (let arr of input) {
        arr.sort((a,b)=>b-a);

        if (max<arr[0]) {
            max=arr[0];
        }
    }

    console.log(max);
}

solve([[20, 50, 10],
       [8, 33, 145]])
solve([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]])