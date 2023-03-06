//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing problem6 statement logic
const problem6 = require("./problem6.js");
const cars = problem6(carsDetail);

//Consoling the results
for (let idx = 0; idx < cars.length; idx++) {
  console.log(JSON.stringify(cars[idx]));
}
