const snail = function (array) {
  const newArr = [];
  const arr = array;
  while (arr.length > 0) {
    newArr.push(...arr.shift());
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].pop());
    }
    if (arr[arr.length - 1]) {
      arr[arr.length - 1].reverse();
      newArr.push(...arr.pop());
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i].shift());
    }
  }
  return newArr;
};
