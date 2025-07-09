//Tripplets: Alex, Gideon, Grace
 // This is a test file for the factorial function


const assert = require('assert');  
const { factorial } = require('./factorial'); 

// First test cycle
describe('Factorial', () => {
  it('factorial(0) = 1', () => {
    assert.equal(factorial(0), 1);  
  });
});

// Second test cycle
describe('Factorial', () => {
  it('factorial(5) = 120', () => {
    assert.equal(factorial(5), 120); 
  });
});


// Third test cycle
describe('Factorial',() => {
  it('factorial(4) = 24', () =>{
    assert.equal(factorial(4),24);
  });
});


// Fourth test cycle
describe('Factorial', () => {
  it('factorial(10) = 3628800', () => {
    assert.equal(factorial(10), 3628800);  
  });
});

// Fifth test cycle
describe('Factorial', () => { 
  it('factorial(-1) = "Invalid input"', () => {
    assert.equal(factorial(-1), "Invalid input");  
  });
});