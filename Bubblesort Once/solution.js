function bubblesortOnce(a) {
  const copyOfArray = [...a];
  for (let i = 0; i < copyOfArray.length; i++) {
    if(copyOfArray[i] > copyOfArray[i + 1]) {
      const a = copyOfArray[i];
      const b = copyOfArray[i + 1];
      copyOfArray[i] = b;
      copyOfArray[i + 1] = a;
    }
  }
  return copyOfArray;
}