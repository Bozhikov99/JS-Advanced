function add(num){
    let sum=num;

    function adding(additive){
        sum+=additive;

        return adding;
    }
    
    adding.toString=function() {
        return sum;
    };

    return adding;
}

console.log(add(1));
