//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing problem2 statement logic
const problem2 = require("./problem2.js");

//Storing last car information in a variable
const lastCarInfo = problem2(carsDetail);

//Displaying the output
console.log(
    `Last car is a ${lastCarInfo.car_make} ${lastCarInfo.car_model}`
  );
