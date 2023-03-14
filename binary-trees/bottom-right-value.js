// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first

const bottomRightValue = (root) => {
  if (!root) return null;

  const queue = [root];
  let cur = root;

  while (queue.length > 0) {
    cur = queue.shift();

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return cur.val;
};
