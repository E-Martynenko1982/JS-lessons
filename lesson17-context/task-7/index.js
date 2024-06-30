
const user = {
  firstName: 'John',
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(fullName) {
    // split separate string with spase
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

user.setFullName('Ann Fucker')
console.log(user);

