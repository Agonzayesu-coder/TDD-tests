//Tripplets: Alex, Gideon, Grace
 // This is a test file for the factorial function


const assert = require('assert');  
const { factorial } = require('../factorial'); 

// First test cycle
describe('Factorial', () => {
  it('factorial(0) = 1', () => {
    assert.equal(factorial(0), 1);  
  });
});
