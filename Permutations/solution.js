function permutations(string) {
  if (string.length < 2) {
    return [...string];
  } else if (string.length === 2) {
    if (string[0] === string[1]) {
      return [string];
    } else {
      const str1 = string.split("");
      const str2 = string.split("");
      const temp1 = str2[0];
      const temp2 = str2[1];
      [str2[1], str2[0]] = [temp1, temp2];
      const arr2 = [str1.join(""), str2.join("")];
      return arr2;
    }
  } else {
    let temp = string.split("");
    const possibilities = [];
    for (let i = 0; i < 200; i++) {
      let randomA = Math.floor(Math.random() * temp.length);
      let randomB = Math.floor(Math.random() * temp.length);
      if (randomA != randomB) {
        let a = temp[randomA];
        let b = temp[randomB];
        [temp[randomA], temp[randomB]] = [b, a];
      }
      if (possibilities.includes(temp.join("")) === false) {
        possibilities.push(temp.join(""));
      }
    }
    return possibilities;
  }
}
