function createSortedList(){
    return {
        elements: [],
        size:0,
        add(element){
            this.elements.push(element);
            this.elements.sort((a, b)=>a-b);
            this.size++;
        },
        remove(index){
            if (index>=0&&index<this.elements.length) {
                this.elements.splice(index, 1);
                this.size--;
            }
                
        },
        get(index){
            if (index>=0&&index<this.elements.length) {
            return this.elements[index];
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));