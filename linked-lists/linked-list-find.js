// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// traverse list,
// if cur.val = target return true
// if end of list is reached return false

const linkedListFindIterative = (head, target) => {
  let cur = head;

  while (cur !== null) {
    if (cur.val === target) return true;
    else cur = cur.next;
  }
  return false;
};

const linkedListFindRecursive = (head, target) => {
  if (head === null) return false;
  else if (head.val === target) return true;
  else return linkedListFind(head.next, target);
};
