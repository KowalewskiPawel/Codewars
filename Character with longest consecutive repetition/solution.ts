export function longestRepetition(text: string): [string, number] {
  if (!text) return ["", 0];

  type LettersObject = {
    [index: string]: number;
  };

  const lettersArray: [string, number][] = [];

  let lettersObject: LettersObject = {};

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      lettersObject[text[i]] = 1;
    } else if (text[i - 1] === text[i]) {
      lettersObject[text[i]] += 1;
      if (i === text.length - 1) {
        lettersArray.push([text[i], lettersObject[text[i]]]);
      }
    } else if (text[i] !== text[i - 1]) {
      lettersArray.push([text[i - 1], lettersObject[text[i - 1]]]);
      lettersObject = {};
      lettersObject[text[i]] = 1;
    } else if (text[i] !== text[i + 1]) {
      lettersArray.push([text[i - 1], lettersObject[text[i - 1]]]);
      lettersObject = {};
      lettersObject[text[i]] = 1;
    }
  }

  lettersArray.sort((a, b) => b[1] - a[1]);

  return lettersArray[0];
}
