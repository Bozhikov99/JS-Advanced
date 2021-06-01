function solve(input)
{
    let array=[];

    for (let i = 0; i < input.length; i++) {
        let [name, lvl, items]=input[i].split(' / ');
        lvl=Number(lvl);
        items=items?items.split(', '):[];

        array.push({
            name: name,
            level: lvl,
            items: items
        });
    }

    console.log(JSON.stringify(array));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);