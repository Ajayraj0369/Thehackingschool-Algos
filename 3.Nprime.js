//Write a program to decide given N is Prime or not.

function isPrime(n){
    for(i=2; i<n; i++){
        if(n%i===0){
            return "its not a prime"
        }

    }

    return "Its a prime "
}

console.log(isPrime(11))