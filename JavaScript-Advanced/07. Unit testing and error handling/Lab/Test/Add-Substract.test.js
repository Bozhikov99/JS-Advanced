const createCalculator = require('../Add-Substract');
const assert = require('chai').assert;

describe('returned object contains props', () => {

    it('add', () => {
        let obj = createCalculator();
        let isContained = obj.add ?
            true : false;

        assert.equal(true, isContained);
    });

    it('substract', () => {
        let obj = createCalculator();
        let isContained = obj.subtract ?
            true : false;

        assert.equal(true, isContained);
    });

    it('get', () => {
        let obj = createCalculator();
        let isContained = obj.get ?
            true : false;

        assert.equal(true, isContained);
    });
});

describe('functions', () => {
    
    it('get', ()=>{

        let obj=createCalculator();
        let expected=0;

        assert.strictEqual(expected, obj.get());

    })

    it('add', () => {
        let obj=createCalculator();
        
        let expected=15;

        obj.add(10);
        obj.add(5);
        
        assert.equal(obj.get(), expected);
    })

    it('add parses', () => {
        let obj=createCalculator();
        
        let expected=15;

        obj.add(10);
        obj.add("5");
        
        assert.equal(obj.get(), expected);
    })

    it('substract', () => {
        let obj=createCalculator();
        
        let expected=99;

        obj.subtract(-100);
        obj.subtract(1);
        
        assert.equal(obj.get(), expected);
    })

    it('substract parses', () => {
        let obj=createCalculator();
        
        let expected=99;

        obj.subtract(-100);
        obj.subtract("1");
        
        assert.equal(obj.get(), expected);
    })
})