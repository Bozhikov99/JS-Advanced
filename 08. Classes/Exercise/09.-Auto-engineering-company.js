function solve(input) {

    let carBrands = new Map();

    for (const c of input) {

        let [brand, model, amount] = c.split(' | ');
        amount = Number(amount);

        if (!carBrands.has(brand)) {
            carBrands.set(brand, []);
        }

        if (!carBrands
            .get(brand)
            .some(x => x.model === model)) {

            let newCar = {
                model: model,
                amount: amount
            }

            carBrands
                .get(brand)
                .push(newCar);

        } else {
            carBrands.get(brand)
                .find(x => x.model == model)
                .amount += amount;
        }
    }

    for (const [brand, carList] of carBrands) {
        
        console.log(brand);

        carList.forEach(c => {
            console.log(`###${c.model} -> ${c.amount}`);
        });
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)