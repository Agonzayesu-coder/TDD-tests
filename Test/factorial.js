
function factorial(n){
    if (n < 0) {
        return "Invalid input";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

}
// Export the factorial function for testing
module.exports = { factorial };