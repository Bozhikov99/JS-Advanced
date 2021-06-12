const rgbToHexColor = require('../RGB-to-Hex');
const assert = require('chai').assert;

describe('input', () => {

    it('out of range red', () => {

        let lowRed = -1;
        let highRed = 256;

        let expectedResult = undefined;

        assert.strictEqual(expectedResult, rgbToHexColor(lowRed, 200, 200));
        assert.strictEqual(expectedResult, rgbToHexColor(highRed, 200, 200));

    });

    it('border range red', ()=>{

        let highRed=255;
        let lowRed=0;

        assert.strictEqual('#FFFFFF', rgbToHexColor(highRed, highRed, highRed));
        assert.strictEqual('#000000', rgbToHexColor(lowRed,lowRed,lowRed));
    })

    it('out of range green', () => {

        let lowGreen = -1;
        let highGreen = 256;

        let expectedResult = undefined;

        assert.strictEqual(expectedResult, rgbToHexColor(200, lowGreen, 200));
        assert.strictEqual(expectedResult, rgbToHexColor(200, highGreen, 200));

    });

    it('out of range blue', () => {

        let lowBlue = -1;
        let highBlue = 256;

        let expectedResult = undefined;

        assert.strictEqual(expectedResult, rgbToHexColor(200, 200, lowBlue));
        assert.strictEqual(expectedResult, rgbToHexColor(200, 200, highBlue));

    });

    it('input is NaN', () => {

        assert.strictEqual(undefined, rgbToHexColor('a', 100, 100));
        assert.strictEqual(undefined, rgbToHexColor(111, 'a', 100));
        assert.strictEqual(undefined, rgbToHexColor(100, 100, 'a'));
    })
})

describe('output tests', ()=> {

    it('returns correctly', ()=>{

        let red=150;
        let green=132;
        let blue=170;

        let expected='#9684AA';

        assert.strictEqual(expected, rgbToHexColor(red, green, blue))
    })
});