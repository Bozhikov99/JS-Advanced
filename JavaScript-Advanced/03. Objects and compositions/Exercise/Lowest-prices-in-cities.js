function solve(input){
    let products={};

    for (let i = 0; i < input.length; i++) 
    {
        let [town, prodName, price]=input[i].split(' | ');
        price=Number(price);

        if (!products[prodName]) {
            products[prodName]={};
        }

        products[prodName][town]=price;

    }

    for (const e in products) {
        let sortedTowns=Object.entries(products[e]).sort((a,b)=>a[1]-b[1]);
        let cheapestTown=sortedTowns[0];
        
        console.log(`${e} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
    }
    
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])