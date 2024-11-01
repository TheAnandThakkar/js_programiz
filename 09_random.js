function randomNumber(lowestNum, highestNum) {
  const result = Math.floor(
    Math.random() * (highestNum - lowestNum + 1) + lowestNum
  );
  console.log(result);
}

randomNumber(1, 10);
