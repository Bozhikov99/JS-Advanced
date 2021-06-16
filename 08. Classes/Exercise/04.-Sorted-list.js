class List {
    constructor(numbers=[]) {
        this.numbers = numbers.sort((a, b)=>a-b);
        this.size=numbers?this.numbers.length:0;
    }

    add(element) {
        this.numbers.push(element)
        this.numbers.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {

        if (index>=0&&index<size) {
            
            this.numbers.splice(index, 1);
            this.numbers.sort((a, b) => a - b);
            this.size--;
            return;
        }
    }

    get(index){
        if (index>=0&&index<size) {
        return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
let wtf=list.size;
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

