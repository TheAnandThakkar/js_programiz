function sumOfNaturalNumbers(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n--;
  }
  console.log(sum);
  return sum;
}

sumOfNaturalNumbers(100);
