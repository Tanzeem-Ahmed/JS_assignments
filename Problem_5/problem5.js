module.exports = function problem5(allCars) {
  const oldCars = [];

  //Traversing across allCars array and push the year which is less than 2000
  for (let idx = 0; idx < allCars.length; idx++) {
    if (allCars[idx] < 2000) {
      oldCars.push(allCars[idx]);
    }
  }

  return [oldCars, oldCars.length];
};
