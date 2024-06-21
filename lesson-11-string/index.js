/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
// task-1
// checking for string - return null if false
// assign arr with chunks
// assign startposition of the chank(index)
// assign loop while where chunk sliced with method substring()
//  push slices to arr with appercase first symbols
// iterate start position for amountSymbols
// return arr with method join and argument \n
// eslint-disable-next-line no-const-assign
// startPosition += amountSymbols;
// const splitText = (str, amountSymbols = 10) => {
//   if (typeof str !== 'string') {
//     return null;
//   }

// const noInternalModules = require("eslint-plugin-import/lib/rules/no-internal-modules")

//   const resultStr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = str.substring(startPosition, startPosition + amountSymbols);
//     if (chunk.length === 0) {
//       break;
//     }
//     resultStr.push(chunk[0].toUpperCase() + chunk.slice(1));

//   }

//   return resultStr.join('\n');
// };

// console.log(splitText('abcdefgheyturik', 4));

// -----------------------------------
// task-2
// assign sort method for arr with check for boolean and apply localeCompare method
// return result
// const sortContacts = (arr, asc = true) => {
//   if (!Array.isArray(arr)) {
//     return null
//   }


//   const result = arr.sort((a, b) => {
//     if (asc) {
//       return a.name.localeCompare(b.name);
//     } else {
//        eslint-disable-next-line prettier/prettier
//       return b.name.localeCompare(a.name)
//     }

//   })
//   return result
// }

// const contacts = [
//   { name: 'Tom', phoneNumber: '777-77-77' },
//   { name: 'Ann', phoneNumber: '555-55-55' },
//   { name: 'John', phoneNumber: '666-66-66' },
// ];

// console.log(sortContacts(contacts, false));


// ----------------------------
// task3
// return null if typeof str is not string
// assign empty arr result
// assign variable startPosition which to begin of current string
// apply while loop fo str split to substr
// method substring extract substring with length starting from startPosition index
// if length of taken string(chunk) = 0 loop is break
// if length of taken string(chunk) < length it fill dotes to instead missing elements
// substring chunk push to result array
// startPosition increment on length value for jump to next substring
const splitString = (str, length = 10) => {
  if (typeof str !== "string") {
    return null
  }



  const result = [];
  let startPosition = 0;

  while (startPosition < str.length) {
    let chunk = str.substring(startPosition, startPosition + length);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < length) {
      chunk += '.'.repeat(length - chunk.length);
    }
    result.push(chunk);
    startPosition += length;
  }

  return result;
};

// console.log(splitString('abcd efgh', 4))

// -------------------------

// task-4
// check for empty second argument apply if => null
// assign count of occurences and position wich = 0
// assign loop while which iterate indexes str from 0 if loop find occurrence - account + 1
// 
// eslint-disable-next-line default-param-last
const countOccurrences = (str = '', strOccurrences) => {
  if (strOccurrences === '') {
    return null
  }

  let count = 0;
  let position = 0;

  // eslint-disable-next-line no-cond-assign
  while ((position = str.indexOf(strOccurrences, position)) !== -1) {
    // eslint-disable-next-line no-plusplus
    count++;
    position += strOccurrences.length;
  }

  return count;
};

console.log(countOccurrences('doremi fasol lasi', 'mi'))
