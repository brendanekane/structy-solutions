// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// traverse list
// once we find the targetVal make the prev.next = cur.next

const removeNodeRecursive = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};

const removeNodeIterative = (head, targetVal) => {
  if (head.val === targetVal) return head.next;

  let cur = head,
    prev = null;

  while (cur !== null) {
    if (cur.val !== targetVal) {
      prev = cur;
      cur = cur.next;
    } else {
      prev.next = cur.next;
      break;
    }
  }
  return head;
};
