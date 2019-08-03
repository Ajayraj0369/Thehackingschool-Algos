function product(x, y) {
  if (y == 1) {
    return x;
  } else {
    return x * product(x, y - 1);
  }
}

console.log(product(5, 3));
