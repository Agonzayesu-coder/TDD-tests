const assertEqual = require('assert');
const multiply = require('../multiply');
describe('multiply', ()=> {
    it('should return 1 when we multioly 1*1', () => {
assertEqual(multiply(1, 1), 1);
});
});
