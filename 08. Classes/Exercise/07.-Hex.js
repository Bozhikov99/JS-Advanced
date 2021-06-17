class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {

        let decimal = this.value;
        let hexValues = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F'
        }

        let convertedValue = '0x';

        while (decimal > 0) {

            let current = decimal % 16;

            if (hexValues[current]) {
                current = hexValues[current];
            }

            decimal = Math.floor(decimal / 16);

            convertedValue += current;
        }
        return convertedValue;
    }

    plus(num) {
        return new Hex(this.value + num);
    }

    minus(num) {
        return new Hex(this.value - num);
    }

    parse(hex) {

        let chars = hex.substring(2);

        let hexValues = {
            "A": '10',
            "B": '11',
            "C": '12',
            "D": '13',
            "E": '14',
            "F": '15'
        }

        let parsed = 0;

        for (let i = chars.length - 1; i >= 0; i--) {
            let current = chars[i];

            if (hexValues[current]) {
                current=hexValues[current];
            }

            current=Number(current);

            parsed+=current*16**i;
        }

        return parsed
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
