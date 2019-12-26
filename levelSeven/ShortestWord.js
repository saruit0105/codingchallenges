function findShort(s) {
  let splitStr = s.split(" ");
  sortedArr = splitStr.sort((a, b) => a.length - b.length);
  return sortedArr[0].length;
}
