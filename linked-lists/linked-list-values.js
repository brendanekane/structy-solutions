// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValuesIterative = (head) => {
  const results = [];
  let current = head;

  while (current !== null) {
    results.push(current.val);
    current = current.next;
  }

  return results;
};

const linkedListValuesRecursive = (head) => {
  const results = [];
  fillValues(head, results);
  return results;
};

const fillValues = (head, results) => {
  if (head === null) return;
  results.push(head.val);
  fillValues(head.next, results);
};
