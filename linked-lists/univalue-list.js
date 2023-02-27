// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueListRecursive = (head, prevVal = null) => {
  if (head === null) return true;

  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

const isUnivalueListIterative = (head) => {
  let prevVal = head.val;

  while (head !== null) {
    if (head.val !== prevVal) return false;
    head = head.next;
  }
  return true;
};
