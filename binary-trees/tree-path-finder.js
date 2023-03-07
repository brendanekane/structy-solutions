// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first recursive
// if not target then return null
// recurse into left and right sides
// return [root.val, ...leftside, ...rightside]
//

const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const leftVals = pathFinder(root.left, target),
    rightVals = pathFinder(root.right, target);

  if (!leftVals && !rightVals) return null;
  if (leftVals) {
    // using spread operator to return an array - causes an additional loop
    return [root.val, ...leftVals];
  }
  if (rightVals) {
    // using spread operator to return an array - causes an additional loop
    return [root.val, ...rightVals];
  }
};

// same approach as above but pushing into array each recursion instead of using the spread operator which creates another loop. This is more performant because it reduces O(n) to n instead of n^2

const pathFinderPerformant = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result == null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const leftVals = pathFinderHelper(root.left, target),
    rightVals = pathFinderHelper(root.right, target);

  if (!leftVals && !rightVals) return null;
  if (leftVals) {
    // pushing into return array instead of using spread operator
    leftVals.push(root.val);
    return leftVals;
  }
  if (rightVals) {
    // pushing into return array instead of using spread operator
    rightVals.push(root.val);
    return rightVals;
  }
};
