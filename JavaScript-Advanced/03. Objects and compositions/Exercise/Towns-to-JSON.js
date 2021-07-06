function solve(input){
    let titles = serializeRow(input[0]);
    let rows = input
    .slice(1)
    .map(r=> serializeRow(r).reduce((acc,el,i)=>{
        acc[titles[i]]= el;
        return acc;
    }, {}));

    console.log(JSON.stringify(rows));

    function serializeRow(str) {
        return str
        .split(/\s*\|\s*/gim)
        .filter(x=>x!=='')
        .map(x=> isNaN(Number(x))? x: Number(Number(x).toFixed(2)));
    }
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)