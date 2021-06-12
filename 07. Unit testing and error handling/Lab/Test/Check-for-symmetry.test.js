const isSymmetric = require('../Check-for-symmetry');
const assert = require('chai').assert;

describe('symmetrty check', () => {

    it('returns true if symmetrical', () => {

        let arg = [1, 2, 3, 2, 1];
        let expected = true;

        assert.strictEqual(expected, isSymmetric(arg));

    })

    it('returns false if not symmetrical', () => {

        let arg = [1, 2, 3, 1];
        let expected = false;

        assert.strictEqual(expected, isSymmetric(arg));
    });

    it('returns false if faux symmetry', () => {

        let arg = [1,2,2, '1'];
        let expected = false;

        assert.strictEqual(expected, isSymmetric(arg));

    })
})

describe('argument type checking', () => {

    it('false if argument is string', () => {

        let expected = false;
        assert.equal(isSymmetric(''), false);
    })

    it('false if arg is number', () => {

        assert.equal(isSymmetric(3), false);
    })

    it('false if arg is function', () => {

        let arg = () => {

        }

        assert.equal(isSymmetric(arg), false);
    })

    it('false if arg is object', () => {

        let arg = {};

        assert.equal(isSymmetric(arg), false);
    })

})


//I like JS ♥