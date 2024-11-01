function largestNumber(n1, n2, n3) {
  let highestNum = 0;

  if (n1 > n2 && n1 > n3) {
    highestNum = n1;
  } else if (n2 > n1 && n2 > n3) {
    highestNum = n2;
  } else {
    highestNum = n3;
  }

  console.log(`Highest number is ${highestNum}`);
}

largestNumber(-31, -15, 0);
