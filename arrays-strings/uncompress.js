const uncompress = (s) => {
  // 3n12e3z
  let result = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    // i = 0
    let j = i, // j = 0 / 1
      ch = s[j]; // ch = n

    while (alpha.indexOf(ch) === -1 || j === i) {
      j++;
      ch = s[j];
    }

    let num = parseInt(s.slice(i, j));

    result += ch.repeat(num);

    i = j;
  }
  return result;
};
