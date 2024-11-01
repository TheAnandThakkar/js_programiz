function factors(n) {
  let facArr = [];

  for (var i = 0; i <= n; i++) {
    if (n % i == 0) {
      facArr.push(i);
    }
  }

  console.log(facArr.toString());
}

factors(12);
