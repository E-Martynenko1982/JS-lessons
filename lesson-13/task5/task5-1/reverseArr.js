export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null
  }
  return arr.reverse()
};

console.log(reverseArray([1, 2, 3,]))
