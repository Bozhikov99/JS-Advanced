function solve(numberInput, op1, op2, op3, op4, op5)
{
    let number=applyOperation(numberInput, op1);
    number=applyOperation(number, op2);
    number=applyOperation(number, op3);
    number=applyOperation(number, op4);
    number=applyOperation(number, op5);

    function applyOperation(number, operation){

        switch (operation)
        {
            case 'chop':
                number/=2;
                break;
            case 'dice':
                    number=Math.sqrt(number);
                    break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number*=3;
                break;
            case 'fillet':
                    number*=0.8;
                    break;   
        }
        console.log(number);

        return number
    }
}

solve(9, 'dice', 'spice', 'chop', 'bake', 'fillet')