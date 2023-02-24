const mostFrequentChar = (s) => {
  let count = {},
    max = 0,
    mostFrequent = '';

  for (let ch of s) {
    if (!count[ch]) count[ch] = 1;
    else count[ch]++;

    if (count[ch] > max) {
      max = count[ch];
      mostFrequent = ch;
    }

    if (count[ch] === max) {
      let min = Math.min(s.indexOf(ch), s.indexOf(mostFrequent));
      mostFrequent = s[min];
    }
  }
  return mostFrequent;
};
