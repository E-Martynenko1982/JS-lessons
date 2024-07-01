// const user = {
//   firstName: 'John',
//   lastName: 'Doe',

//   get FullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set FullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// user.FullName = "Tom Hardy";
// console.log(user.FullName)

function abbrevName(name) {

  let arr = name.split(' ');

  return arr[0][0] + '.' + arr[1][0]

}
console.log(abbrevName('John Doe'))

