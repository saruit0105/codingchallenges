function dashatize(num) {
  const splitArr = num.split("");
  const newArr = splitArr.map(eachNum => {
    if (eachNum % 2 === 1) {
      return "-" + eachNum + "-";
    } else return eachNum;
  });
  let newestArr = newArr.join("").split("");
  const length = newestArr.length - 1;
  if (newestArr[length] === "-") {
    newestArr.splice(length, 1);
  }
  if (newestArr[0] === "-") {
    newestArr.splice(0, 1);
  }
  return newestArr;
}

dashatize(nums);

var a = 10;
while (a < 10) {
  a--;
  break;
}
console.log(a);



// ----
function dashatize(num) {
  const conv = (acc, val) => (val % 2 != 1) ? acc + val : acc + `-${val}-`;
  const trim = (str) => str == '--' ? '-' : '';
  let [...numArr] = Math.abs(num).toString();

  let str = numArr.reduce(conv, '');
  return str.replace(/^-|--|-$/gi, trim);
};