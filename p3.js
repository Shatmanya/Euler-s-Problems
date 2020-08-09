/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
var a=13195;
var prime=[];
var isPrime;
function Prime() {
  for(var i=2;i<=a/2;i+2){
    if(a%i==0)
    {
      //to check divisor of i
      for (var j = 2; j=i/2; i++) {
        if(j%i==0){
          isPrime=false;
        }
        else{
          isPrime=true;
        }
      }
      if(isPrime===true){
        a /=i;
        prime.push(i);
      }
    }
  }
  //to findthe biggest prime factors
  for (var k = 0; k < prime.length; k++) {
  console.log(prime[k]);
}
}
console.log("the largest prime factor of the number "+Prime());
