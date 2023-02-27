// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  let longest = 0,
    curStreak = 0,
    cur = head,
    prevVal = null;

  while (cur !== null) {
    if (prevVal === null) {
      prevVal = cur.val;
      curStreak++;
    } else if (prevVal === cur.val) {
      curStreak++;
    } else {
      curStreak = 1;
      prevVal = cur.val;
    }

    if (curStreak > longest) longest = curStreak;

    cur = cur.next;
  }
  return longest;
};
