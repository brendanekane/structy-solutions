// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// base case if there is no root then return an empty arr
// recursive call into the left side
// recursive call into the right side
// merge left and right sides into one arr
// return the arr

const depthFirstValues = (root) => {
  if (!root) return [];
  const leftVals = depthFirstValues(root.left); // [d]
  const rightVals = depthFirstValues(root.right);
  return [root.val, ...leftVals, ...rightVals];
};

// create resultArr and stack with root inside
// while stack isn't empty
// pop off stack
// if children exist push on stack
// right then left
// push val into resultarr
// return resultarr when stack is empty

const depthFirstValuesIterative = (root) => {
  if (!root) return [];
  const resultArr = [],
    stack = [root];

  while (stack.length > 0) {
    const cur = stack.pop();

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);

    resultArr.push(cur.val);
  }

  return resultArr;
};
