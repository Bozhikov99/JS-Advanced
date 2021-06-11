function sum(array, startIndex, endIndex){
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex<0) {
        startIndex=0;
    }

    if (endIndex>=array.length) {
        endIndex=array.length-1;
    }

    let sum=array
    .slice(startIndex, endIndex+1)
    .reduce((acc, x)=> acc+Number(x),0);
    return sum
}

sum('test', 3, 300)
console.log(sum([10, 20, 30, 40, 50, 60], 3, 300))