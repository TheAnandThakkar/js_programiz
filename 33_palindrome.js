function palindrome(string) {
  const stringSplit = string.split("");
  console.log(stringSplit);

  const reversedValue = stringSplit.reverse();
  console.log(reversedValue);

  const reversedString = reversedValue.join("");
  console.log(reversedString);

  if (string === reversedString) {
    console.log(`${string} is the palindrome`);
  } else {
    console.log(`${string} is not the palindrome`);
  }
}

function palindromeUsingForLoop(string) {
  const len = string.length;

  for (var i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) {
      return console.log(`${string} is not the palindrome`);
    } else {
      return console.log(`${string} is the palindrome`);
    }
  }
}

palindrome("madam");
palindromeUsingForLoop("hello");
