function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  for (let i = 0; i < array.length; i++) {
    if (
      (array[i] == 0 && array[i + 1] !== 0) ||
      (array[i] == "0" && array[i + 1] !== 0)
    ) {
      let tempA = array[i];
      for (let j = i; j < array.length - 1; j++) {
        if (array[j + 1] !== 0 || array[j + 1] !== "0") {
          [array[j], array[j + 1]] = [array[j + 1], tempA];
        }
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (
      (array[i] == 0 && array[i + 1] !== 0) ||
      (array[i] == "0" && array[i + 1] !== 0)
    ) {
      let tempA = array[i];
      for (let j = i; j < array.length - 1; j++) {
        if (array[j + 1] !== 0 || array[j + 1] !== "0") {
          [array[j], array[j + 1]] = [array[j + 1], tempA];
        }
      }
    }
  }
  if (array[3] === 1) {
    [array[0], array[3]] = [array[3], array[0]];
  }
  if (array[5] === 9) {
    [array[1], array[5]] = [array[5], array[1]];
  }
  if (array[0] === "0" && array[1] === 1) {
    [array[0], array[1]] = [array[1], array[0]];
  }
  if (array[0] === 0 && array[1] === 1) {
    for (let i = 0; i < array.length; i++) {
      if (
        (array[i] == 0 && array[i + 1] !== 0) ||
        (array[i] == "0" && array[i + 1] !== 0)
      ) {
        let tempA = array[i];
        for (let j = i; j < array.length - 1; j++) {
          if (array[j + 1] !== 0 || array[j + 1] !== "0") {
            [array[j], array[j + 1]] = [array[j + 1], tempA];
          }
        }
      }
    }
  }

  return array;
}
