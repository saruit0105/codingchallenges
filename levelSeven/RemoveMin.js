function removeSmallest(numbers) {
  let originalArr = [...numbers];
  let sortedArr = [...numbers].sort((a, b) => (a > b ? 1 : -1));
  const lowestNum = sortedArr[0];
  const index = originalArr.indexOf(lowestNum);
  originalArr.splice(index, 1);
  return originalArr;
  throw "TODO: removeSmallest";
}
