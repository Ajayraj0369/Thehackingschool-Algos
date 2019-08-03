//Write a program to find whether given number is an Perfect number or no

const perfectNumber = x => {
  let sum = 0;
  for (let i = 0; i < x; i++) {
    if (x % i === 0) {
      sum += i;
    }
  }

  return sum === x ? "A Perfect Number" : "Not a perfect Number";
};

console.log(perfectNumber(28));
