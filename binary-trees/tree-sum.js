// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first
// create sum and queue
// while queue !empty
// shift from cur
// add to sum
// add children to queue if exist
// return sum when queue empty

const treeSum = (root) => {
  if (!root) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    sum += cur.val;

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return sum;
};

// depth first recursive
// if !root return sum
// recurse left
// recurse right
//return root.val + leftSum + rightSum

const treeSumRecursive = (root) => {
  if (!root) return 0;
  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);
  return root.val + leftSum + rightSum;
};

// depth first iterative
// create stack, sum
// while stack !empty
// pop off stack
// add to sum
// add children to stack if they exist, right then left
// return sum when stack is empty

const treeSumIterative = (root) => {
  if (!root) return 0;
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const cur = stack.pop();
    sum += cur.val;

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return sum;
};
