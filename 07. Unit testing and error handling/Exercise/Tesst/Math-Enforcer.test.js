const mathEnforcer = require('../Math-enforcer');
const assert = require('chai').assert;

describe('addFive', () => {

    it('returns correctly', () => {

        let num = 10;
        let expected = 15;

        assert.strictEqual(expected, mathEnforcer.addFive(num));
    });

    it('returns correctly with negative number', () => {

        let num = -10;
        let expected = -5;

        assert.strictEqual(expected, mathEnforcer.addFive(num));
    });

    it('returns correctly with floating point', () => {

        let num = 0.9899;
        let expected = 5 + 0.9899;

        assert.closeTo(expected, mathEnforcer.addFive(num), 0.01);
    });

    it('returns undefined', () => {

        let num = "10";
        let expected = undefined;

        assert.strictEqual(expected, mathEnforcer.addFive(num));
    });
});

describe('substractTen', () => {

    it('returns correctly with positive number', () => {

        let num = 10;
        let expected = 0;

        assert.strictEqual(expected, mathEnforcer.subtractTen(num));
    });

    it('returns correctly with negative number', () => {

        let num = -10;
        let expected = -20;
        assert.strictEqual(expected, mathEnforcer.subtractTen(num));
    });

    it('returns correctly with floating point', () => {

        let num = 0.9999;
        let expected = 0.9999 - 10;

        assert.closeTo(expected, mathEnforcer.subtractTen(num), 0.01);
    });

    it('returns undefined', () => {

        let num = "10";
        let expected = undefined;

        assert.equal(expected, mathEnforcer.subtractTen(num));
    });
});

describe('sum', () => {

    it('returns correctly when adding', () => {

        let a = 10;
        let b = 2;

        let expected = 12;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns correctly when one is negative', () => {

        let a = 92;
        let b = -32;

        let expected = 60;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns correctly when substracting', () => {

        let a = -2;
        let b = -1;

        let expected = -3;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns undefined when a is NaN', () => {

        let a = '100';
        let b = -32;

        let expected = undefined;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns undefined when b is NaN', () => {

        let a = 100;
        let b = '-32';

        let expected = undefined;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns undefined when both are NaN', () => {

        let a = '100';
        let b = '-32';

        let expected = undefined;

        assert.strictEqual(expected, mathEnforcer.sum(a, b));
    });

    it('returns correctly with floating point', () => {

        let num = 0.0919034;
        let secondNum=1.2;
        let expected = num + secondNum;

        assert.closeTo(expected, mathEnforcer.sum(num, secondNum), 0.01);
    });
});