// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
}
const returnLastTwoDrivers = function(names){
    return names.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => function(fare) { return fare * multiplier };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, eitherOne) => eitherOne(arrayOfDrivers);


