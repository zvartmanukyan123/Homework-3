function longestString (str) {
  let arr = str.split(" ");
  let longestWord=arr[0];
  for (let i = 1; i < str.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i]
    }
  }
  return longestWord;
}
console.log(longestString("A revolution without dancing is a"));
