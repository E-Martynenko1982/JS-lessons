export const calc = initValue => {
  let result = initValue;
  const calculator = {
    add(value) {
      result += value;
      return this
      // return calculator
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    }
  }
  return calculator;
};


