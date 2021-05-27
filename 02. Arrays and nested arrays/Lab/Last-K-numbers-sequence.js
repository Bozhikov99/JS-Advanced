function solve(n, k)
{
    let array=[1];

    for (let i = 1; i < n;i++) {

        for (let j = Math.max(0, i-k); j >= 0; j--) {
                array[i]=0;
                array[i]+=array[Math.abs(i-k)];
        }
    }

    console.log(`[${array.join(', ')}]`);

}

solve(6, 3);