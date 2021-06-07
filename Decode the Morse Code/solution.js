decodeMorse = function (morseCode) {
  let words = morseCode.trim().split(" ");
  let letters = words.join(" ").split(" ");
  let answer = [];
  let regex = /\s+/gi;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "") {
      answer.push(" ");
    } else {
      answer.push(MORSE_CODE[letters[i]]);
    }
  }

  return answer.join("").replace(regex, " ");
};
