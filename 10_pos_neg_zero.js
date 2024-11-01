function checkNumber(n) {
  if (typeof n == "string") {
    console.log("Enter a valid number");
  } else if (n >= 0) {
    if (n == 0) {
      console.log(`${n} is neither negative nor positive`);
    } else {
      console.log(`${n} is a positive number`);
    }
  } else {
    console.log(`${n} is a negative number`);
  }
}

checkNumber(1.1);
