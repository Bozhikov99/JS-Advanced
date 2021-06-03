function extract(content) {
    let regEx=/\(([^)]+)\)/g
    let matches=content.match(regEx);

    let output=[];

    for (const m of matches) {
        let current=m.slice(1, m.length-1)+';';
        output.push(current);
    }

    return output.join(' ')

}

console.log(extract("The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill)."))