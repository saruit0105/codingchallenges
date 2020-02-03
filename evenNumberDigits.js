var findNumbers = function (nums) {
  let evenCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evenCount = evenCount + 1
    }
  }
  return evenCount
}

