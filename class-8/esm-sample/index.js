import { factorial, fibonacciSequence, sumOfPrime } from "./utility.js";

(()=>{
    console.log(`factorial of 5: ${factorial(5)}`);
    console.log(`sum of prime up to 200: ${sumOfPrime(200)}`);
    console.log(`fibonacci sequence up  to 100: ${fibonacciSequence(100)}`);
})(); // IIFE - immidiately invoke function