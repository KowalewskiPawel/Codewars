function pigIt(str) {
  let regex = /[a-zA-Z]/i;
  let string = str.split(" ");
  let latin = [];
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      latin.push(string[i].slice(1).concat(string[i][0]) + "ay");
    } else {
      latin.push(string[i]);
    }
  }
  return latin.join(" ");
}
