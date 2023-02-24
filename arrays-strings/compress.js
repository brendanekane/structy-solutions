const compress = (s) => {
  // 'ccaaatsss'
  let result = '',
    i = 0, // 0
    j = 0; // 2

  while (i < s.length) {
    while (s[i] === s[j]) {
      j++;
    }
    let count = j - i;
    if (count > 1) {
      let sub = count.toString() + s[i];
      result += sub;
    } else result += s[i];

    i = j;
  }

  return result;
};
