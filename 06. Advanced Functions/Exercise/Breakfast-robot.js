function solution(){

    const storage={
        protein:0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes={
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        prepare(recipe, quantity){

            for (const ingredient in this[recipe]) {
                if (this[recipe][ingredient]*quantity>storage[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`;
                }

                storage[ingredient]-=this[recipe][ingredient]*quantity;
            }

            return 'Success';
        }
    }

    return processor=(input)=>{
        
        if (input.includes('restock')) {
            let [, ingredient, quantity] = input.split(' ');
            storage[ingredient]+=Number(quantity);
            return 'Success';
        }
        if(input.includes('prepare')){
            let [, recipe, quantity] = input.split(' ');
            return recipes.prepare(recipe, quantity);
        }

        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

}

let manager = solution(); 
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));