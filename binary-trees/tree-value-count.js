// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first

const treeValueCountBreadthFirst = (root, target) => {
  if (!root) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length > 0) {
    const cur = queue.shift();

    if (cur.val === target) sum++;

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return sum;
};

// depth first iterative

const treeValueCountDepthFirst = (root, target) => {
  if (!root) return 0;

  let sum = 0;
  const stack = [root];

  while (stack.length > 0) {
    const cur = stack.pop();

    if (cur.val === target) sum++;

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return sum;
};

// depth first recursive
// if (!root) return 0
// if val === target return 1
// recurse into left and right
// add each result val

const treeValueCountRecursive = (root, target) => {
  if (!root) return 0;

  const leftResult = treeValueCount(root.left, target),
    rightResult = treeValueCount(root.right, target);

  if (root.val === target) return leftResult + rightResult + 1;
  else return leftResult + rightResult + 0;
};
