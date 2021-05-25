function solve(input)
{
    let arr=[];
    let counter=0;

    for (let index = 0; index < input.length; index++) {
        if (index%2==0) {
            arr[counter]=input[index];
            counter++;
        }
    }

    console.log(arr.join(' ', arr));
}

solve(['20','30','40','50','60']);