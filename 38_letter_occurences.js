function letterOccurences(string, letter) {
  let count = 0;
  const len = string.length;

  for (var i = 0; i < len; i++) {
    if (string.charAt(i) == letter) {
      count++;
    }
  }

  console.log(count);

  return count;
}

letterOccurences("School", "o");
