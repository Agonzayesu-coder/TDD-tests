//Tripplets: Alex, Gideon, Grace
 // This is a test file for the multiply function


const assert = require('assert');  
const { multiply } = require('./multiply'); 

//First test cycle

describe('Multiplication', () => {
  it('multiply(1, 1) = 1', () => {
    assert.equal(multiply(1, 1), 1);  
  });
});


// Second test cycle

describe('Multiplication', () => {
  it('multiply(2, 2) = 4', () => {
    assert.equal(multiply(2, 2), 4); 
  });
});


// Third test cycle

describe('Multiplication', () => {
  it('multiply(3, 3) = 9', () => {
    assert.equal(multiply(3, 3), 9); 
  });
});

// Fourth test cycle

describe('Multiplication', () => {
  it('multiply(4, 4) = 16', () => {
    assert.equal(multiply(4, 4), 16); 
  });
});
