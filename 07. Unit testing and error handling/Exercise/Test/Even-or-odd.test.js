const isOddOrEven=require('../Even-or-odd');
const assert=require('chai').assert;

it('Returns undefined if arg is not a string', ()=>{

    let arg=12;
    let expected=undefined;

    assert.strictEqual(expected, isOddOrEven(arg));
    
});

describe('Returns correctly', ()=>{

    it('Returns even', ()=>{

        let arg="1234";
        let expected="even";

        assert.strictEqual(expected, isOddOrEven(arg));

    });

    it('Returns odd', ()=>{

        let arg="Zdrasti";
        let expected="odd";

        assert.strictEqual(expected, isOddOrEven(arg));

    });

    it("Returns correctly both", ()=>{

        let first="hello";
        let second="hell";
        let third=[1, 532, 10, "Panaiot"];

        assert.strictEqual('odd', isOddOrEven(first));
        assert.strictEqual('even', isOddOrEven(second));
        assert.strictEqual(undefined, isOddOrEven(third));
    });
});