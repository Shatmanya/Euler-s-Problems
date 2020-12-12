/*The sum of the squares of the first ten natural numbers is,

The square of the sum of the first ten natural numbers is,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum */

let sumOfSquare=0;
let squareOfSum=0;
let i=1;

for(let i=1;i<=100;i++){
    sumOfSquare+=Math.pow(i,2);
}

for(let j=1;j<=100;j++){
    squareOfSum+=j;
}
var total=Math.pow(squareOfSum,2);

var difference=total-sumOfSquare;

console.log("sum of square is "+sumOfSquare);
console.log("total "+total);
console.log("difference "+difference);