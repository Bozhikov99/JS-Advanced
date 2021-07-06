function solve(input)
{
    let array=[];
    let output='';

    for (let i = 0; i < input.length; i++) {

        if (typeof(input[i])=="number") {
            array.push(input[i]);
        } else {
            if (array.length<2) {
                output='Error: not enough operands!';
                break;
            }
            array.push(calculate(array.pop(), array.pop(), input[i]));
        };
    }

    if (array.length==1&&output=='') {
        output=array[0];
    } else if(array.length > 1)
    {
        output='Error: too many operands!';
    }

    console.log(output);

    function calculate(a, b, operator)
    {
        if (operator=='+') {
            return a+b;
        } 
        else if (operator=='-')
        {
            return b-a;
        }
        else if (operator=='*')
        {
            return a*b;
        } else {
            return b/a;
        }
    }
}

solve([
    3,
    4,
    '+'])

solve([5,
    3,
    4,
    '*',
    '-']
   )

solve([7,
    33,
    8,
    '-']
   )

solve([1,'-'])