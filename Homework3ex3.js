function foo (arr) {
  let num = 0;
  let str = 0;
  for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) == "string"){
     str++;
    } else {
      num++;
    }
  }
  return ("Numbers: " + num + ", Strings: " + str);
}
console.log(foo([1, '10', 'hi', 2, 3]));
