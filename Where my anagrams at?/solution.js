function anagrams(word, words) {
  let anagramsArray = [];
  function sort(words) {
    return words.split("").sort().join("");
  }
  const mainWord = sort(word);

  for (let wrd of words) {
    if (wrd.length === mainWord.length) {
      let temp = sort(wrd);
      if (temp === mainWord) {
        anagramsArray.push(wrd);
      }
    }
  }
  return anagramsArray;
}
