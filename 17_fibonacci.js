function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;
  let fibArr = [];

  for (var i = 1; i <= n; i++) {
    fibArr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(fibArr.toString());
}

fibonacci(10);
