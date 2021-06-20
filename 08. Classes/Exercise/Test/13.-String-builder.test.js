let StringBuilder = require('../13.-String-builder');
let assert = require('chai').assert;

describe('constructor', () => {

    it('initializes with empty constructor', () => {

        let expected = '';
        let testSb = new StringBuilder();

        assert.strictEqual(expected, testSb.toString());
    });

    it('initializes with string arg', () => {

        let testSb = new StringBuilder('Test');
        let expected = 'Test';

        assert.equal(expected, testSb.toString());
    });

    it('throws error when the arg is not a string', () => {
        assert.throws(() => new StringBuilder(1), TypeError);
    });
});

describe('append', () => {

    it('appends correctly', () => {

        let testSb = new StringBuilder('Test');
        testSb.append('123');

        let expectedFirst = 'Test123'
        assert.equal(expectedFirst, testSb.toString());

        testSb.append(' warning!')
        let expectedFinal = 'Test123 warning!'

        assert.equal(expectedFinal, testSb.toString());
    });

    it('append throws error when arg is not a string', () => {

        let testSb = new StringBuilder('Test');

        assert.throws(() => testSb.append(123), TypeError);
    });

});

describe('prepend', () => {

    it('prepends correctly', () => {

        let testSb = new StringBuilder('Test');
        testSb.prepend('123');
        let expectedFirst = '123Test'
        assert.equal(expectedFirst, testSb.toString());

        testSb.prepend(' warning!')
        let expectedFinal = ' warning!123Test'

        assert.equal(expectedFinal, testSb.toString());
    });

    it('prepends chars at correct index', () => {

        let input = 'Test';
        let prepend = 'Hello, ';

        let testSb = new StringBuilder(input);
        testSb.prepend(prepend);

        let expected1 = 'Hello, Test';
        let expected2 = 'Hello,Test';

        assert.equal(expected1, testSb.toString());

        testSb.remove(6, 1);

        assert.equal(expected2, testSb.toString());
    });

    it('prepends throws error when arg is not a string', () => {

        let testSb = new StringBuilder('Test');

        assert.throws(() => testSb.prepend(123), TypeError);
    });
});

describe('insert', () => {

    it('inserts correctly', () => {

        let testSb = new StringBuilder('Volswagen');
        testSb.insertAt('k', 3);

        let expected = 'Volkswagen';

        assert.equal(expected, testSb.toString());
    });

    it('inserts at the beginning', () => {

        let input = 'What';
        let testSb = new StringBuilder(input);
        testSb.insertAt('lol ', 0);

        let expected = 'lol What';
        assert.equal(expected, testSb.toString());

    });

    it('throws error when arg is not a string', () => {

        let testSb = new StringBuilder();

        assert.throws(() => testSb.insertAt(0, [1, 23]), TypeError);
    });

    it('inserts at the end', () => {

        let testSb = new StringBuilder('This test');
        let validString = ' rekt me';
        let expected = 'This test rekt me';

        testSb.insertAt(validString, 9);

        assert.equal(expected, testSb.toString());

    });

    it('inserts chars', () => {

        let testSb = new StringBuilder('what');
        let insert1 = 'on?';
        let insert2 = ' is going ';
        let insert3 = '?'
        let expected = 'what is going on?';

        testSb.insertAt(insert1, 4);
        assert.equal('whaton?', testSb.toString());

        testSb.insertAt(insert2, 4);
        testSb.insertAt(insert3, 17);

        assert.equal('what is going on??', testSb.toString());
        testSb.remove(16, 1);

        assert.equal(expected, testSb.toString());

    });

});

describe('remove', () => {

    it('removes correctly', () => {

        let testSb = new StringBuilder('Remove');
        testSb.remove(0, 2);

        let expected = 'move';

        assert.equal(expected, testSb.toString());
    });

    it('removes the last 2 correctly', () => {

        let testSb = new StringBuilder('Remove');
        testSb.remove(-2, 2);

        let expected = 'Remo';

        assert.equal(expected, testSb.toString());
    });
});