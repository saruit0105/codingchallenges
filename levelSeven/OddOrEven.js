function oddOrEven(array) {
  if (array.length > 0) {
    const sum = array.reduce((acc, total) => {
      return total + acc;
    });
    return sum % 2 === 0 ? "even" : "odd";
  }
  return "even";
}
