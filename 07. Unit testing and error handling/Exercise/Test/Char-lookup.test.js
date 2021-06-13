const lookupChar=require('../Char-lookup')
const assert=require('chai').assert;

describe('Returns correct char', ()=>{

    it('Returns correct index',()=>{

        let index=2;
        let arg="Abkhazia";

        let expected='k';

        assert.strictEqual(expected, lookupChar(arg, index));
    });

    it('Returns final char', ()=>{
        let index=3;
        let arg="Call";
        let expected="l";

        assert.strictEqual(expected, lookupChar(arg, index));

    });

    it('Returns first char', ()=>{

        let index=0;
        let arg="Varna";
        let expected="V";

        assert.strictEqual(expected, lookupChar(arg, index));
    });

});

describe('Index out of range', ()=>{

    it('negative', ()=>{

        assert.strictEqual("Incorrect index", lookupChar("Summon", -1));
    })

    it('index too big', ()=> {

        let index=100;
        let arg="Matti from Finland";
        let expected="Incorrect index";

        assert.strictEqual(expected, lookupChar(arg,index));
        
    });

    it('index is equal to string length', ()=>{

        let arg="Panaiot";
        let index=arg.length;
        let expected="Incorrect index";

        assert.strictEqual(expected, lookupChar(arg, index));
    });
});

describe('false argument type tests', ()=>{

    it('string', ()=>{

        let index=0;
        let arg=12;
        let expected=undefined;

        assert.strictEqual(expected, lookupChar(arg, index));
    });

    it('number', ()=>{

        let index= "Sega e momenta za apartamenta";
        let arg="Koga?";
        let expected=undefined;

        assert.strictEqual(expected, lookupChar(arg,index));
    });

    it('double', ()=>{

        let index= 1.2;
        let arg="Koga?";
        let expected=undefined;

        assert.strictEqual(expected, lookupChar(arg, index))
    })
});