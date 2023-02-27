// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// create result and queue vals
// while queue is !empty
// shift from queue
// add val to resultArr
// add children to queue if they exist
// return resultArr when queue is empty

const breadthFirstValues = (root) => {
  if (!root) return [];

  const resultArr = [],
    queue = [root];

  while (queue.length > 0) {
    const cur = queue.shift();
    resultArr.push(cur.val);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return resultArr;
};
