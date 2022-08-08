const sumAll = function (fNumber, lNumber) {
    if (typeof (fNumber) === "number" && typeof (lNumber) === "number" && fNumber>=0 && lNumber>=0) {
        let upperLimit = lNumber;
        let lowerLimit = fNumber;
        if(fNumber>lNumber){
            upperLimit = fNumber;
            lowerLimit = lNumber;
        }
        
        let sum = 0;
        for (let i = lowerLimit; i <= upperLimit; i++) {
            sum += i;
        }
        return sum;
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
