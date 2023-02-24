const anagrams = (s1, s2) => {
  let obj = {};

  s1.split('').forEach((ch) => {
    if (obj[ch]) obj[ch]++;
    else obj[ch] = 1;
  });

  for (let ch of s2) {
    if (!obj[ch]) return false;
    else obj[ch]--;
  }

  for (let ch in obj) {
    if (obj[ch] !== 0) return false;
  }

  return true;
};
