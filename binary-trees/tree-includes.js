// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first iterative
// if !root return false
// if root = target return true
// create stack
// until stack is empty
// cur = pop stack
// if cur = target return true
// push children into stack
// return false when stack is empty

const treeIncludesDepthIterative = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  const stack = [root];

  while (stack.length > 0) {
    const cur = stack.pop();
    if (cur.val === target) return true;

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return false;
};

// breadth first
// if !root return false
// if root = target return true
// create queue
// until queue is empty
// cur = queue shift
// if cur = target return true
// push children into queue
// return false if queue is empty

const treeIncludesBreadth = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  const queue = [root];

  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur.val === target) return true;

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return false;
};

// recursive depth first
// base case is if the root is empty return false;
// if root is target return true;
// recurse left and save in variable
// recurse right and save in variable
// if left and right are false return false

const treeIncludesRecursive = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  const leftBool = treeIncludes(root.left, target),
    rightBool = treeIncludes(root.right, target);

  if (!leftBool && !rightBool) return false;
  if (leftBool || rightBool) return true;
};
