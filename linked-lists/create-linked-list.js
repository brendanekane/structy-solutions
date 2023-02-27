class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// return null for base case of empty array
// create a newNode and set next = to return of recursive call with first el of arr removed
// return newNode

const createLinkedList = (values) => {
  if (values.length === 0) return null;
  const newNode = new Node(values[0]);
  newNode.next = createLinkedList(values.slice(1));
  return newNode;
};

const createLinkedListIterative = (values) => {
  let head = null, // undefined / H
    cur = null; // undefined / H / E / Y

  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);
    if (head === null) head = newNode;
    if (i !== 0) cur.next = newNode;
    cur = newNode;
  }

  return head;
};
