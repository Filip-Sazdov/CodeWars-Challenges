function reverseWords(str) {
  let arr = str.split(" ");
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let accumulator = "";
    for (let j = 0; j < arr[i].length; j++) {
      accumulator = arr[i][j] + accumulator;
    }
    arr1.push(accumulator);
  }
  let finalString = arr1.join(" ");
  return finalString;
}
reverseWords("double  spaced  words");
