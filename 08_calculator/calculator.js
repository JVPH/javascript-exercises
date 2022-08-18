const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a, b) {
  return a-b;	
};

const sum = function(array) {
  return array.reduce((total, arg) => total + arg, 0);
};

const multiply = function(array) {
  return array.reduce((total, arg) => total * arg);  

};

const power = function(base, exponent) {
  return Math.pow(base, exponent);  
	
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  let factorial = num;
  for(let i = num; i > 1; i--){    
    factorial = factorial*(i-1);
  }
  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
