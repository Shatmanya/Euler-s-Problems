/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */


//prime numbers always satisfy the condition of 6n-1 or 6n+1

function prime(index) {
    var i, primes = [2, 3], n = 5;

    function isPrime(n) {
        var i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }

    for (i = 2; i <= index; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    }
    return primes[index - 1];
}

console.log(prime(1e4 + 1));
