function solve(input)
{
    let array=[];

    for (let i = 0; i < input.length; i++) {
        if (input[i]=='add') {
            array.push(i+1);
        } else {
            array.pop();
        }
    }

    array.forEach(x=>console.log(x));

    if (array.length==0) {
        console.log('Empty');
    }

}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
)