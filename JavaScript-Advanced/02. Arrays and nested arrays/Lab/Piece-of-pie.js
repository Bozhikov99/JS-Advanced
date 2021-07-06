function solve(array, a, b)
{
    let start=array.indexOf(a);
    let end=array.indexOf(b)+1;
    let newArray=array.slice(start, end);

    return newArray;
}

solve(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)