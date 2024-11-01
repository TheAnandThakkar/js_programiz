function checkOddEven(n) {
  let result = "";
  if (typeof n == "string") {
    console.log("Enter a valid number");
  } else {
    result = n % 2 == 0 ? "even" : "odd";
  }
  console.log(`${n} is an ${result} number`);
  return result;
}

checkOddEven(1);
