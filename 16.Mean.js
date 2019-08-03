function mean(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  console.log(sum / array.length);
}

mean([3, 4, 5, 6]);
