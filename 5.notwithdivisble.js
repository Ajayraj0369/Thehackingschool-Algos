//Write a program to find remainder of two numbers without using modulus (%) operator


function notWithDivisible(dividend,divisor){
    let a = Math.trunc(dividend/divisor);
    let b = a * divisor;
    let c = dividend - b;
    console.log(c)
}

notWithDivisible(5,2)
