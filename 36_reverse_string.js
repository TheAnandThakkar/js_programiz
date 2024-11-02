function reverse(string) {
  const str = string.split("");
  console.log(str);

  const reverse = str.reverse();
  console.log(reverse);

  const reverseWord = reverse.join("");
  console.log(reverseWord);

  return reverseWord;
}

reverse("Hello World!");
