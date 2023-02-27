// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// iterative depth first

const treeMinValue = (root) => {
  if (!root) return null;

  const stack = [root];
  let min = Infinity;

  while (stack.length > 0) {
    const cur = stack.pop();
    min = Math.min(min, cur.val);

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return min;
};

// recursive depth first

const treeMinValueRecursive = (root) => {
  if (!root) return Infinity;
  const leftVal = treeMinValue(root.left),
    rightVal = treeMinValue(root.right),
    childMin = Math.min(leftVal, rightVal);
  return Math.min(root.val, childMin);
};

// breadth first

const treeMinValueBreadth = (root) => {
  if (!root) return null;

  const queue = [root];
  let min = Infinity;

  while (queue.length > 0) {
    const cur = queue.shift();
    min = Math.min(min, cur.val);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return min;
};
