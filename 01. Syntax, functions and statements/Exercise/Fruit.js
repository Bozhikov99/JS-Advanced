function solve(fruit, weightInput, pricePerKgInput)
{
    let weight=Number(weightInput);
    let price=Number(pricePerKgInput);

    console.log(`I need $${((weight/1000)*price).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}