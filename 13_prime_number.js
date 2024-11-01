function primeNumber(n) {
  let isPrime = true;
  if (n <= 0) {
    console.log(`Prime number can be neither negative nor zero`);
  } else if (n == 1) {
    console.log(`${n} is neither prime nor composite number.`);
  } else {
    for (var i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  console.log(isPrime);
}

primeNumber(5);
