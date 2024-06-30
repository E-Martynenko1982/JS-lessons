
function sumOfSquares() {
  return [].reduce.call(arguments, (acc, elem) => {
    return acc + elem ** 2
  }, 0)
}
console.log(sumOfSquares(1, 2, 3, 4))
