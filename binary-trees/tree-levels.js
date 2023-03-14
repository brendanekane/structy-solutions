// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first but store in queue a 2d array of the node and level
// when traversing through push the node into the results arr at index === level

const treeLevels = (root) => {
  if (!root) return [];

  const queue = [[root, 0]],
    results = [];

  while (queue.length > 0) {
    const curEl = queue.shift(),
      curNode = curEl[0],
      curLevel = curEl[1];

    if (!results[curLevel]) results[curLevel] = [curNode.val];
    else results[curLevel].push(curNode.val);

    if (curNode.left) {
      queue.push([curNode.left, curLevel + 1]);
    }
    if (curNode.right) {
      queue.push([curNode.right, curLevel + 1]);
    }
  }
  return results;
};
