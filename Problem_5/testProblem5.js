//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing problem5 statement logic
const problem5 = require("./problem5.js");

//Importing all year array
const years = require("../Problem_4/problem4.js");
const allYears = years(carsDetail);

//Storing the array of old cars;
const oldCars = problem5(allYears);

for (let idx = 0; idx < oldCars.length; idx++) {
  console.log(oldCars[idx] + "\n");
}
