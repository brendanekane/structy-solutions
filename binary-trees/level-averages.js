// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first traversal
// save the level with the node in queue
// get avg of each el arr after traversal

const levelAverages = (root) => {
  if (!root) return [];

  const queue = [{ cur: root, level: 0 }],
    averages = [];

  while (queue.length > 0) {
    const { cur, level } = queue.shift();

    if (!averages[level]) averages[level] = [cur.val];
    else averages[level].push(cur.val);

    if (cur.left) queue.push({ cur: cur.left, level: level + 1 });
    if (cur.right) queue.push({ cur: cur.right, level: level + 1 });
  }

  return averages.map((subArr) => {
    let sum = subArr.reduce((cur, acc) => (acc += cur));
    return sum / subArr.length;
  });
};
