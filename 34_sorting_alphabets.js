function sort(string) {
  const result = string.split("");
  console.log(result);
  const reverse = result.sort();
  console.log(reverse);
  const reverseWord = reverse.join("");
  console.log(reverseWord);
  return reverseWord;
}

sort("Anand");

function sortSentence(string) {
  const words = string.split(" ");
  console.log(words);
  const sortWords = words.sort();
  console.log(sortWords);
  const sortedSentence = sortWords.join(" ");
  console.log(sortedSentence);

  return sortedSentence;
}

sortSentence("I am learning Javascript");
