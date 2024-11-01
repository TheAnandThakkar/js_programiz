function randomNumber() {
  const result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(result);
  return result;
}

function guessTheNumber(n) {
  const random = randomNumber();

  if (n < 1 && n > 10) {
    console.log(`Please choose the number between 1 and 10`);
  } else {
    if (random == n) {
      console.log("YAAAAYYYY!!!! You guess the correct number");
    } else {
      console.log("OOOOPS!!!! You guess the wrong number");
    }
  }
}

guessTheNumber(4);
