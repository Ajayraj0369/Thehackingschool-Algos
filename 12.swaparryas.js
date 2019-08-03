//Write a  program for swapping of two arrays

function swap(x, y) {
  let a = x;
  x = y;
  y = a;

  return { x, y };
}

console.log(swap([2, 3, 4, 5], [4, 5, 6, 7]));
