function sameLastDigit(n1, n2, n3) {
  const result1 = n1 % 10;
  console.log(result1);
  const result2 = n2 % 10;
  console.log(result2);
  const result3 = n3 % 10;
  console.log(result3);

  if (result1 == result2 && result1 == result3) {
    console.log(`${n1} , ${n2} & ${n3} have the same last digits`);
  } else {
    console.log(`${n1} , ${n2} & ${n3} have NOT the same last digits`);
  }
}

sameLastDigit(8, 118, 38);
