const PaymentPackage = require('../12.-Payment-package');
const assert = require('chai').assert;

describe('constructor', () => {

    it('initializes correctly', () => {

        let name = 'test';
        let value = 15;
        let testPackage = new PaymentPackage(name, value);

        let expectedVAT = 20;
        let expectedActive = true

        assert.equal(value, testPackage.value);
        assert.equal(name, testPackage.name);
        assert.equal(expectedVAT, testPackage.VAT);
        assert.equal(expectedActive, testPackage.active);

    });

});

describe('setters', () => {

    describe('name', () => {

        it('sets name correctly', () => {

            let name = 'kek';
            let testPackage = new PaymentPackage('name', 1);
            testPackage.name = name;

            assert.equal(name, testPackage.name);
        });

        it('throws error when name is empty string', () => {

            let name = '';
            let testPackage = new PaymentPackage('name', 1);
            assert.throws(() => testPackage.name = name, Error);
        });

        it('throws error when name is not string', () => {

            let name = -1;
            let testPackage = new PaymentPackage('name', 1);
            assert.throws(() => testPackage.name = name, Error);
        });
    });

    describe('value', () => {

        it('sets value correctly', () => {
            let value1 = 25;
            let value2 = 0;

            let testPackage1 = new PaymentPackage('name', 1);
            let testPackage2 = new PaymentPackage('name', 1);

            testPackage1.value = value1;
            testPackage2.value = value2;

            assert.equal(value1, testPackage1.value);
            assert.equal(value2, testPackage2.value);
        });

        it('sets floating value correctly', () => {
            let value = 2.5;

            let testPackage = new PaymentPackage('name', 1);

            testPackage.value = value;

            assert.equal(value, testPackage.value);
        });

        it('throws error when arg is not string', () => {

            let value = "Boiler";
            let testPackage = new PaymentPackage('name', 1);

            assert.throws(() => testPackage.value = value, Error);

        });

        it('throws error when arg is negative', () => {

            let value = -250;
            let testPackage = new PaymentPackage('name', 1);

            assert.throws(() => testPackage.value = value, Error);

        });
    });

    describe('VAT', () => {

        it('sets VAT correctly', () => {
            let VAT1 = 25;
            let VAT2 = 0;

            let testPackage1 = new PaymentPackage('name', 0);
            let testPackage2 = new PaymentPackage('name', 999);

            testPackage1.VAT = VAT1;
            testPackage2.VAT = VAT2;

            assert.equal(VAT1, testPackage1.VAT);
            assert.equal(VAT2, testPackage2.VAT);
        });

        it('sets VAT correctly with a floating point', ()=>{

            let VAT=0.12;
            let testPackage=new PaymentPackage('name', 35.99);

            testPackage.VAT=VAT;


            assert.equal(VAT, testPackage.VAT);
        });

        it('throws error when arg is not string', () => {

            let VAT = "Boiler";
            let testPackage = new PaymentPackage('name', 1);

            assert.throws(() => testPackage.VAT = VAT, Error);

        });

        it('throws error when arg is negative', () => {

            let VAT = -250;
            let testPackage = new PaymentPackage('name', 1);

            assert.throws(() => testPackage.VAT = VAT, Error);

        });
    });

    describe('active', () => {

        it('sets active correctly', () => {

            let testPackage = new PaymentPackage('name', 1);
            let active = false;

            testPackage.active = active;

            assert.equal(active, testPackage.active);
        });

        it('throws error when arg is not bool', () => {

            let testPackage = new PaymentPackage('name', 1);
            let active = "false";

            assert.throws(() => testPackage.active = active, Error);
        });
    });

});

describe('toString', () => {

    it('returns correctly', () => {

        let testPackage=new PaymentPackage('dummy', 120.5);
        testPackage.VAT=100;
        let expected= `Package: dummy\n- Value (excl. VAT): 120.5\n- Value (VAT 100%): 241`;

        assert.strictEqual(expected, testPackage.toString());

    });

    it('returns correctly when inactive', () => {

        let testPackage=new PaymentPackage('dummy', 120.5);
        testPackage.VAT=100;
        testPackage.active=false;
        let expected= `Package: dummy (inactive)\n- Value (excl. VAT): 120.5\n- Value (VAT 100%): 241`;

        assert.strictEqual(expected, testPackage.toString());

    });
});

//`Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
//`- Value (excl. VAT): ${this.value}`,
//`- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`