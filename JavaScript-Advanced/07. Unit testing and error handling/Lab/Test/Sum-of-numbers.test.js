const sum = require('../Sum-of-numbers');
const assert = require('chai').assert;

it ('returns sum correctly', ()=> {
    let arr= [1,2,3,4];
    
    let result=sum(arr);
    let expected=10;

    assert.equal(expected, result);
    
})

