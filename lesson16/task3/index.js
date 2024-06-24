export const createArrayOfFunctions = num => {
  if (num === undefined) {
    return [];
  }

  if (typeof num !== "number") {
    return null;
  }



  const arr = [];

  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    }

  }
  return arr
}

// func createArrayOfFunctions calling with arg 9 and made array of 9elements
// than [5] calls to 6th element(index 5) in this array - it is a func which return 5
// () callthis func and return 5

console.log(createArrayOfFunctions(9)[5]())
