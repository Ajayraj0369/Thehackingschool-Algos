const per = (n, r) => {
  let nfact = 1;
  for (i = 1; i <= n; i++) {
    nfact *= i;
  }
  let rnfact = 1;
  for (i = 1; i <= n - r; i++) {
    rnfact *= i;
  }
  let rfact = 1;
  for (i = 1; i <= r; i++) {
    rfact *= i;
  }

  console.log(`Permutation  ${nfact / rnfact}`);
  return `The combination is ${nfact / (rfact * rnfact)}`;
};

console.log(per(5, 3));
