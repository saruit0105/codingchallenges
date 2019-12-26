function reverseWords(str) {
  const newStr = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return newStr;
}
