export function twoOldestAges(ages: number[]): number[] {
    const sortedAges = ages.sort((a, b) => b - a);
    return [sortedAges[1], sortedAges[0]];
  }