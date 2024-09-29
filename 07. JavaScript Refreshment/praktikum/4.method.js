const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
}; 
console.log(calculator.add(5, 3)); 
console.log(calculator.divide(10, 2));