//Write a program to find the Sum of Array Elements.

function sumarry(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumarry([1, 2, 3, 4]));
