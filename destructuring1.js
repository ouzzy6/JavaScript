let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20


[num1, num2] = [num2, num1]; //Usamos destructuring

console.log('After swap: ', num1, num2); // After swap: 20 10
