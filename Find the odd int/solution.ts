export const findOdd = (xs: number[]): number => {
  let oddNumber = 0;
  const numbersMap: Map<number, number> = new Map();
  const numbersSet: Set<number> = new Set();
  xs.forEach((num) => {
    numbersSet.add(num);
    const currentCount = numbersMap.get(num);
    if (currentCount) {
      numbersMap.set(num, currentCount + 1);
    } else {
      numbersMap.set(num, 1);
    }
  });

  Array.from(numbersSet).forEach((num) => {
    const isOdd = numbersMap.get(num);
    if (isOdd && isOdd % 2 !== 0) {
      oddNumber = num;
    }
  });
  return oddNumber;
};
