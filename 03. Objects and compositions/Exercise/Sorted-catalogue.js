function solve(input)
{
    let catalog={}
    for (let i = 0; i < input.length; i++) {

        let [productName, price]=input[i]
        .split(' : ');

        price=Number(price);

        let letter=productName[0];

        if (!catalog[letter]) {
            catalog[letter]={};
        }

        catalog[letter][productName]=price;
    }

    let letters=Object.values(catalog);
    let keys=Object.keys(catalog)
    .sort((a, b)=>a.localeCompare(b));

    for (const key of keys) {
        let products=catalog[key];
        let sortedProducts=Object.keys(products)
        .sort((a, b)=>a.localeCompare(b));

        console.log(key);

        for (const p of sortedProducts) {
            let currentPrice=catalog[key][p];
            console.log(` ${p}: ${currentPrice}`);
        }
    }
    
    console.log();
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])