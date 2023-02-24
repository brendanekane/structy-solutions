const pairProduct = (numbers, targetProduct) => {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i],
      divisor = targetProduct / num;

    if (divisor in map) return [map[divisor], i];
    map[num] = i;
  }
};
