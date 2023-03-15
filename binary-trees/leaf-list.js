// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first recursive
// when at leaf (no left or right) return that node

const leafList = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  const left = leafList(root.left),
    right = leafList(root.right);

  return [...left, ...right];
};
