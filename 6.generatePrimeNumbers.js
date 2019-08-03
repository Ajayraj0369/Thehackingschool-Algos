//Write a program to generate Prime  Numbers less than N and Generate ‘N’ Prime Numbers/in givenrange.

function generate(n) {
  let i,
    j,
    arr = [];
  for (i = 2; i < n; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(generate(50));
