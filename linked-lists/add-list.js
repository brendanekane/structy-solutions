class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// traverseList helper function
// traverse list and append to arr
// reverse arr, join, parseInt
// return number

const convertToNum = (head) => {
  const numArr = [];
  let cur = head,
    numStr;

  while (cur !== null) {
    numArr.push(cur.val.toString());
    cur = cur.next;
  }

  numStr = numArr.reverse().join('');

  return parseInt(numStr);
};

// createList helper function
// literally the opposite of traverseList
// toString, split, reverse
// create a list out of the arr

const convertToList = (num) => {
  const numArr = num.toString().split('').reverse();
  let cur = null,
    head = null;

  numArr.forEach((num, i) => {
    let newNode = new Node(num);
    if (i === 0) {
      head = newNode;
      cur = newNode;
    }
    cur.next = newNode;
    cur = newNode;
  });
  return head;
};

// main function
// convert lists to numbers
// add numbers
// convert sum to a list

const addListsWithHelpers = (head1, head2) => {
  const num1 = convertToNum(head1),
    num2 = convertToNum(head2),
    sum = num1 + num2,
    listSum = convertToList(sum);

  return listSum;
};

// recursive no helper

const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;

  const val1 = head1 === null ? 0 : head1.val,
    val2 = head2 === null ? 0 : head2.val,
    sum = val1 + val2 + carry,
    newCarry = sum > 9 ? 1 : 0,
    digit = sum % 10,
    newNode = new Node(digit),
    next1 = head1 === null ? null : head1.next,
    next2 = head2 === null ? null : head2.next;

  newNode.next = addLists(next1, next2, newCarry);
  return newNode;
};
