function isPangram(string) {
  let splitStr = string
    .toLowerCase()
    .split(" ")
    .join("")
    .split("")
    .sort((a, b) => (a > b ? 1 : -1));
  let checkArr = [];

  splitStr.forEach(eachLetter => {
    if (checkArr.indexOf(eachLetter) === -1) {
      checkArr.push(eachLetter);
    }
  });
  if (checkArr.length >= 26) {
    return true;
  } else return false;
}
