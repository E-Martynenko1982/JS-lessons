//1)
//filter method with apply division remainder on three
//in-arr, out-newArr
// apply arrow func

// const getSpecialNumbers = (arr) => arr.filter(num => num % 3 === 0);
// console.log(getSpecialNumbers([5, 15, 9]))

//2)
//sort method
//in-arr, out-newArr
//1st -slice method for copy
//2nd-apply sort method  with callback(comparison function): from greatest to smallest num
// return newArr
//apply arrow func for shortest write code

// const sortDesc = (arr) => arr.slice().sort((a, b) => b - a)
// console.log(sortDesc([40, 1, 5, 200]))



//3)
//flat method + sort with callback(comparison function): from smallest  to  greatest num
//in-arr, out-newArr

// const flatArray = arr => arr.flat().sort((a, b) => a - b);

// console.log(flatArray([7, 2, 16, [4, 33], [6, 7], 22,]))



//4)
//filter all students and ignore passed: allStudentsList.filter
//find passed students:!studentsForRetake.includes(student)
//apply message for new arr .map(student => `Good job, ${student}`)

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   return allStudentsList.filter(student => !studentsForRetake.includes(student)).map(student => `Good job, ${student}`)
// };


// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1))

//   ; // ===> ['Good job, Den', 'Good job, Ann']


//5)
//check array for isArray and return null if argument is not array(constructor if)
//apply reduce for pow elements to 2

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(elem => elem ** 2);
}

console.log(squareArray([2, 4, 5]));
