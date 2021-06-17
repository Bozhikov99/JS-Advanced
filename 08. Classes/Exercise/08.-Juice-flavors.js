function solve(input) {
    let bottles = new Map();
    let storage = {};

    for (const s of input) {
        let [juiceName, juiceAmount] = s.split(' => ');
        juiceAmount = Number(juiceAmount);

        if (!storage[juiceName]) {
            storage[juiceName] = 0;
        }

        storage[juiceName] += juiceAmount;

        if (storage[juiceName] >= 1000) {

            let newBottles = Math.trunc(storage[juiceName] / 1000);
            storage[juiceName] -= newBottles * 1000;

            if (!bottles.get(juiceName)) {
                bottles.set(juiceName, 0);
            }

            bottles.set(juiceName, bottles.get(juiceName) + newBottles);
        }

    }

    for (const [juice, amount] of bottles) {
        console.log(`${juice} => ${amount}`);
    }

}

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']

);