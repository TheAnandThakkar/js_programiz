function decimalToBinary(n) {
  const number = parseInt(n);

  const binary = number.toString(2);

  console.log(binary);

  return binary;
}

decimalToBinary(9);
