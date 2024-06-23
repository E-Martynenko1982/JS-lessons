export const createCalculator = () => {
  let numMemo = 0;

  function add(num) {
    numMemo += num
  }

  function decrease(num) {
    numMemo -= num
  }

  function reset() {
    numMemo = 0
  }

  function getMemo() {
    return numMemo;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  }
};