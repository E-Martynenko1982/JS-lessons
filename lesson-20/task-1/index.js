class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {

    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)

  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`)

  }
  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto()
    }
    return value;
  }
}



const user1 = User.createEmpty()
console.log(user1)


