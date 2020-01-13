function createPhoneNumber(numbers) {
  const phoneNumber = numbers.map(function(num, index) {
    if (index === 0) {
      return "(" + num;
    } else if (index === 2) {
      return num + ") ";
    } else if (index === 5) {
      return num + "-";
    } else return num;
  });
  return phoneNumber.join("");
}
