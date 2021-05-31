function solve(order)
{
    const smallEngine={
        power: 90,
        volume: 1800
    }

    const normalEngine={
        power: 120,
        volume: 2400
    }

    const monsterEngine={
        power: 200,
        volume: 3500
    }

    let carModel=order.model;

    let wheelSize=order.wheelsize%2==0?
    order.wheelsize-1:
    order.wheelsize;

    let carWheels=[wheelSize, wheelSize, wheelSize, wheelSize];

    let carCarriage={
        type: order.carriage,
        color: order.color
    };

    let carEngine;

    if (order.power<=smallEngine.power) {
        carEngine=smallEngine;
    }
    else if (order.power<=normalEngine.power) {
        carEngine=normalEngine;
    }
    else
    {
        carEngine=monsterEngine;
    }

    return {
        model: carModel,
        engine: carEngine,
        carriage: carCarriage,
        wheels: carWheels
    };
}

// console.log(solve(
//     { model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 }));

console.log(solve(
    { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17}));