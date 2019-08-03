const duplicates = arr => {
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

console.log(duplicates([3, 4, 4, 4, 7, 7, 8]));
