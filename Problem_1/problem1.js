//Creating a funtion which will return the object with id = 33
module.exports = function problem1(carsDetail) {
  //Traversing across car array to find the object with id = 33
  for (let idx = 0; idx < carsDetail.length; idx++) {
    if (carsDetail[idx].id === 33) {
      return carsDetail[idx];
    }
  }
};
