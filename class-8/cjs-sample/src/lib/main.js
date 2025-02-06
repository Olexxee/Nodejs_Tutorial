const { factorial, sumOfPrime, fibonacciSequence } = require('./utils');


(() => {
    // function calls here
    console.log(`Factorial of 5: ${factorial(5)}`);
    console.log(`Sum of primes up to 100: ${sumOfPrime(100)}`);
    console.log(`Fibonacci sequence up to 200: ${fibonacciSequence(200)}`);
})();


