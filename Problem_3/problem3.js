//Creating a funtion which will return and array consiting of model name sorted alphabetically
module.exports = function problem3(carsDetail) {
  const carModel = [];

  //Traversing accross carsDetail array of object and pushing all the model names in a carModel array\
  for (let idx = 0; idx < carsDetail.length; idx++) {
    carModel.push(carsDetail[idx].car_model);
  }

  //Sorting the car model array alphabetically
  carModel.sort();

  return carModel;
};
