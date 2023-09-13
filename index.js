const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);
const returnLastTwoDrivers = (arr) => arr.slice(arr.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (num) => {
    return function (fare) {
        return fare * num;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (arr, func) => func(arr);