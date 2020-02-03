/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const complement = target - currentNumber
    if (numMap[complement] !== undefined) return [numMap[complement], i]
    numMap[currentNumber] = i;
  }
}