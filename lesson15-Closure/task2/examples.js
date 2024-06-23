import { createCalculator } from "./index.js";

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()) // 0
console.log(calculator.add(3))
  ;
console.log(calculator.getMemo())
  ; // 3
console.log(calculator.decrease(5))
  ;
console.log(calculator.getMemo())

  ; // -2

calculatorNext.add(5);
calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2
calculator.reset();
calculator.getMemo(); // 0

calculatorNext.getMemo(); // 5
