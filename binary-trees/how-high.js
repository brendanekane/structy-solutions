// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first recursive

const howHigh = (node) => {
  if (!node) return -1;
  const leftVals = howHigh(node.left); // -1 // -1
  const rightVals = howHigh(node.right); // -1 // -1
  const tempSum = Math.max(leftVals, rightVals);
  return tempSum + 1;
};
