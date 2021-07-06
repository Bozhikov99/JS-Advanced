const name=require('../Test');
const assert=require('chai').assert;

describe('should test',()=>{
    it('should test smth', ()=>{
        assert.equal(name(1),3);
    });
});