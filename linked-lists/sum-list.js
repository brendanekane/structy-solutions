// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumListIterative = (head) => {
  let sum = 0;
  let cur = head;

  while (cur !== null) {
    sum += cur.val;
    cur = cur.next;
  }
  return sum;
};

const sumListRecursive = (head) => {
  if (head === null) return 0;
  return (head.val += sumList(head.next));
};
