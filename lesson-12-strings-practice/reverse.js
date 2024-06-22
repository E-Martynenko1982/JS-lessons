// func: in-string, out-reverse string
// check for typeof
// return str with apply split, reverse and join method
const reverseString = str => {

  return typeof str !== "string" ? null : str.split('').reverse().join('')
  // if (typeof str !== "string") {
  //   return null
  // }
  // return str.split('').reverse().join('')
}


console.log(reverseString('loop'))
