const fibonacci = function(number) {
    if(number<0){
        return 'OOPS';
    }
    const fNumber = parseInt(number);
    const phi = (1 + Math.sqrt(5)) / 2;
    const result = (Math.pow(phi,fNumber) - Math.pow((1-phi), fNumber)) / Math.sqrt(5);
    return Math.round(result);
};

// Do not edit below this line
module.exports = fibonacci;
