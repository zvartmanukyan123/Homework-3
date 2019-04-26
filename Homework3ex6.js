function a(str) {
  let newArray = [];
  let array = str.split("");
  for(let i = 0; i <= array.length; i++) {
      if(i % 3 === 0) {
        let arr = array.slice(i - 3, i);
        var item = arr.shift();
        arr.push(item);
        newArray = newArray.concat(arr);
      }
  }
  let spliceStart = array.length - (array.length % 3);
  let x = array.slice(spliceStart, array.length);
  newArray = newArray.concat(x);

    return newArray.join("");
}
