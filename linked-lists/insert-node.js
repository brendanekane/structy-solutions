class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// traverse list until we reach index
// make prev.next = the new node
// make new node.next the cur node

const insertNodeRecursive = (head, value, index, count = 0) => {
  if (index === 0) {
    let newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }

  insertNode(head.next, value, index, count + 1);
  return head;
};

const insertNodeIterative = (head, value, index) => {
  let newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let listIdx = 0,
    cur = head,
    prev = null;

  while (listIdx < index) {
    listIdx++;
    prev = cur;
    cur = cur.next;
  }

  prev.next = newNode;
  newNode.next = cur;
  return head;
};
