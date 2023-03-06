//Importing the car array of objects from car.js
const carsDetail = require("../car.js");

//Importing problem3 statement logic
const problem3 = require("./problem3.js");

//Storing car model names sorted aplhabetically in a variable
const carModel = problem3(carsDetail);

//conslose the result
for(let idx = 0; idx < carModel.length; idx++){
    console.log(carModel[idx] + "\n");
}

