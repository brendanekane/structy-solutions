const reverseListIterative = (head) => {
  let cur = head,
    prev = null;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
