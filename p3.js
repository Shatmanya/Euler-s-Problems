/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function largestPrimeFactor(number) {
  let prime = [];
  // find all factors
  for (let i = 0; i <= Math.sqrt(number); i++) {
    /* used Math.sqrt() to make this process quick as prime factor lasts till the square root of number
      For Example:
                  2*2*2*3 = 24;
                  here 3 is the prime factor of 24.
                  while square root of 24 is 4.89897948557.
                  so the prime factor of a number will always less than or equal to the square root of the number.
    */
    // check if factor; using our handy friend Modulo
    let factor = number % i == 0;
    let isPrime = true;

    if (factor) {
      // see if factor is a prime
      // a prime number has two factors, 1 and itself
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          continue;
        }
      }
    }

    // if so, push to primes list
    if (factor && isPrime) {
      prime.push(i);
    }
  } // end for loop

  // return last element of array
  return prime.pop();
}

console.log(largestPrimeFactor(600851475143));
