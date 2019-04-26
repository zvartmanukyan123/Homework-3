function negativProduct (arr) {
  let newarr =[];
  let isInvalid = false;

  arr.forEach(item => {

    if(Array.isArray(item)) {
      item.forEach(i => {
        if(i < 0) {
          newarr.push(i);
        }
      });
    } else {
      isInvalid = true;
    }
  });

  if(isInvalid) {
    return "invalid value";
  } else if (!newarr.length) {
    return "No negatives";
  }

  let a = newarr.sort(function(a,b){return a - b});
  let b = a[a.length-1];
  let c = a[a.length-2];
  return b * c;

}
negativProduct([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);
