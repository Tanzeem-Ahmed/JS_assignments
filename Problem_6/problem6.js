//Creating a function which will return BMW and Audi cars
module.exports = function problem6(carsDetail){
    const cars = [];

    //Traversing carsDetail array to get the car info of BMW and Audi
    for(let idx = 0; idx < carsDetail.length; idx++){
        if(carsDetail[idx].car_make === 'BMW' || carsDetail[idx].car_make === 'Audi'){
            cars.push(carsDetail[idx]);
        }
    }

    return cars;
}

