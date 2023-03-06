//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing the problem1 logic
const problem1 = require("./problem1");

//Storing car information with id 33 in a variable
const carInfo = problem1(carsDetail);

//Displaying the output
console.log(
  `car 33 is a ${carInfo.car_year} ${carInfo.car_make} ${carInfo.car_model}`
);
