const intersection = (a, b) => {
  const results = [],
    numbers = new Set(a);

  b.forEach((el) => {
    if (numbers.has(el)) results.push(el);
  });

  return results;
};
