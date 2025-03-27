const convertToCelsius = function(x) {
  let converted = ((x - 32) * 0.555555556);
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(y) {
  let converted = (y * 1.8 + 32);
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
