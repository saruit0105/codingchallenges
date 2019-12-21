function openOrSenior(data) {
  let catagorized = data.map(eachData => {
    if (eachData[0] >= 55 && eachData[1] > 7) {
      return "Senior";
    } else return "Open";
  });
  return catagorized;
}
