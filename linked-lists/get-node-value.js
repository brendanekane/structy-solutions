// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValueIterative = (head, index) => {
  let cur = head,
    curIdx = 0;

  while (cur !== null) {
    if (curIdx === index) return cur.val;
    else {
      curIdx++;
      cur = cur.next;
    }
  }
  return null;
};

const getNodeValueRecursive = (head, index) => {
  if (head === null) return null;
  else if (index === 0) return head.val;
  else return getNodeValue(head.next, index - 1);
};
