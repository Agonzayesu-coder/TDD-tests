//Tripplets: Alex, Gideon, Grace
 // This is a test file for the fibonacci function

const assert = require('assert');
const { fibonacci } = require('./fibonacci');

//fibonacci(n), n is the 'n'th number in the Fibonacci sequence
  // First test cycle
 
  describe('Fibonacci', () => {
      it('fibonacci(0) = 0', () => {
        assert.equal(fibonacci(0), 0);
 });

    //second test cycle
        it('fibonacci(1) = 1', () => {
            assert.equal(fibonacci(1), 1);
    });   
    
    // Third test cycle
        it('fibonacci(2) = 1', () => {
            assert.equal(fibonacci(9), 34);
    });

    // Fourth test cycle
        it('fibonacci(20) = 6765', () => {
            assert.equal(fibonacci(20), 6765);
    });
});


 

  
