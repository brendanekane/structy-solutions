class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeListsRecursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};

const mergeListsIterative = (head1, head2) => {
  let cur1 = head1,
    cur2 = head2,
    newHead = new Node(null),
    tail = newHead;

  while (cur1 !== null && cur2 !== null) {
    if (cur1.val < cur2.val) {
      tail.next = cur1;
      cur1 = cur1.next;
    } else {
      tail.next = cur2;
      cur2 = cur2.next;
    }
    tail = tail.next;

    if (cur1 === null) tail.next = cur2;
    if (cur2 === null) tail.next = cur1;
  }
  return newHead.next;
};
