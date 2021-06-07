function isPrime(p) {
  var sqr = Math.floor(Math.sqrt(p));
  for (var start = 2; start <= sqr; start++) {
    if (p % start === 0) {
      return false;
    }
  }
  return true;
}
function gap(g, m, n) {
  let gap = g;
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + gap)) {
      let temp = [];
      for (let j = i + 1; j < i + gap; j++) {
        temp.push(j);
      }
      if (temp.every((num) => !isPrime(num))) {
        return [i, i + gap];
        break;
      }
    }
  }
  return null;
}
