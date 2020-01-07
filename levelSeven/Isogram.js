function isIsogram(str) {
  let lowerCase = str.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    for (let j = i + 1; j < lowerCase.length; j++) {
      if (lowerCase[i] === lowerCase[j]) {
        return false;
      }
    }
  }
  return true;
}
