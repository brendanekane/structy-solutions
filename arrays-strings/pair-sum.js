const pairSum = (numbers, targetSum) => {
  let map = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const delta = targetSum - num;

    if (delta in map) return [i, map[delta]];

    map[numbers[i]] = i;
  }
};
