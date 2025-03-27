const sumAll = function(numOne, numTwo) {
    if (numOne > numTwo) {
        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    } 
    if (numOne < 0 || numTwo < 0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) return 'ERROR';
    let finalSum = 0;
    for (i = numOne; i <= numTwo; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
