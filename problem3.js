/* 
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

let num = 600851475143;
let end = Math.round(Math.sqrt(num));
let result = 1;
for (let i = 1; i < end; i++){
    if (num % i == 0 && isPrime(i)){
        if (i > result){
            result = i;
        }
    }
}
console.log('The largest prime factor of the number', num, 'is', result);

function isPrime(x){
    for (let i = 2; i <= Math.sqrt(x); ++i){
        if (x % i == 0){
            return false;
        }
    }
    return true;
}