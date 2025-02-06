export function sumOfPrime(n) {
    let sum = 0;

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// Example usage:
console.log(sumOfPrime(10)); // Output: 17 (2 + 3 + 5 + 7)

export function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

export function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// module.exports = {
//     fibonacciSequence,
//     factorial,
//     sumOfPrime
// }

// console.log(sumOfPrime);

// Other method


// Module.exports.fibonacciSequence = function fibonacciSequence(n){
//     const sequence = [0,1];
//     for (let i=2; i<=n; i++){
//         sequence.push(sequence[i - 1] + sequence [i - 2]);
//     }

//     return sequence;
// }
