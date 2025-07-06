const assertEqual = require('assert');  
const { multiply } = require('../multiply'); 
describe('multiply', () => {
  it('Should return 1 when multiplying 1 and 1', () => {
    assertEqual(multiply(1, 1), 1);  
  });
});
