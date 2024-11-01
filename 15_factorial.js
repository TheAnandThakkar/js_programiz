function factorial(n) {
  let fac = 1;
  const actualNumber = n;
  while (n > 0) {
    fac = fac * n;
    n--;
    console.log(`${fac} = ${fac} * ${n} = ${fac * n}`);
  }
  console.log(`${actualNumber}! is ${fac}`);
  return fac;
}

factorial(5);
