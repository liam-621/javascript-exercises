const fibonacci = function(number) {
    if (number == 0) {
        return 0;
    } else if (number < 0) {
        return 'OOPS';
    } else { 
        let n1 = 1;
        let n2 = 1;
        let nextTerm;
        let fibonacciArray = [];

        for (let i = 1; i <= number; i++) {
            fibonacciArray.push(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        return fibonacciArray[number - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
