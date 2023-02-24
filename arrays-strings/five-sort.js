// two pointers at beginning and end
// decrement j until != 5
// increment i until = 5
// swap
// continue until i = j

const fiveSort = (nums) => {
  // [12, 5, 1, 5, 12, 7]
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      i++;
    }
  }

  return nums;
};
