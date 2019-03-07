/* 
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

let num = 600851475143;
let flag = true;
let end = Math.round(Math.sqrt(num));
for (let i = 1; i < end; i++){
    if (num % i == 0){
        for (let j = 2; j < i; j++){
            if(isPrime(j)) console.log(i);
        }
        
    }

}

function isPrime(x){
    for (let i = 2; i <= Math.sqrt(x); ++i){
        if (x % i == 2){
            return false;
        }
    }
    return true;
}