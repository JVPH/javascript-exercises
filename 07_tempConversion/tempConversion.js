const ftoc = function(tempC) {
    const conversion = ((tempC - 32)*(5/9));
    return  Math.round(conversion * 10) / 10;

};

const ctof = function(tempF) {
  const conversion = (tempF*(9/5)) + 32;
  return  Math.round(conversion * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
