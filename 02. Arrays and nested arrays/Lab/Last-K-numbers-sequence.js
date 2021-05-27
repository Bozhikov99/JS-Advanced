function solve(n, k)
{
    let array=[1];

    for (let i = 1; i < n;i++) {

       let currentIndex=Math.max(0, i-k);
       let current=array.slice(currentIndex, currentIndex+k)
       .reduce((a, b)=>a+b,0);

       array.push(current);
    }

    console.log(`[${array.join(', ')}]`);

}

solve(6, 3);