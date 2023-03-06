//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing problem4 statement logic
const problem4 = require("./problem4.js");

//Storing the array of all years
const carYear = problem4(carsDetail);

//Consoling the result
for (let idx = 0; idx < carYear.length; idx++) {
  console.log(carYear[idx] + "\n");
}
