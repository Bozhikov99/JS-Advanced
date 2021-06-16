class Stringer{
    constructor(str, length){
        this.initialString=str;
        this.innerString=str;
        this.innerLength=length;
    }

    increase(x){
        this.innerLength+=x;

        if (this.innerLength<0) {
            this.innerLength=0;
        }
    }

    decrease(x){
        this.innerLength-=x;

        if (this.innerLength<0) {
            this.innerLength=0;
        }
    }

    toString(){
        
        this.innerString=this.initialString.slice(0, this.innerLength);

        if (this.innerLength==0) {
            return '...';
        }
        
        if (this.innerString.length<this.innerLength) {
            return this.innerString+'...';
        }

        return this.innerString;
    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4); 
console.log(test.toString());
