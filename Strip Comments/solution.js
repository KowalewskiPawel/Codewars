function solution(input, markers) {
  const array = input.split("\n");
  const markerA = markers[0];
  const markerB = markers[1];
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let temp = [];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === markerA || array[i][j] === markerB) {
        break;
      } else {
        temp.push(array[i][j]);
      }
    }
    newArray.push(temp.join(""));
    temp = [];
  }
  return newArray
    .map((item) => {
      return item.trim();
    })
    .join("\n");
}
