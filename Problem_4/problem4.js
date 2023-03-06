//Creating a funtion which will return all the years of cars
module.exports = function problem4(carsDetail) {
  const carYear = [];

  //Traversing across cars details array of object
  for (let idx = 0; idx < carsDetail.length; idx++) {
    carYear.push(carsDetail[idx].car_year);
  }

  return carYear;
};
