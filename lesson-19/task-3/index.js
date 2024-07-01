function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`)

}

User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false
  }
  this.age = newAge
  if (newAge >= 25) {
    console.log(`New photo request was sent for ${this.name}`)
  }
  return newAge
}

const user1 = new User('Tom', 24);

console.log(user1.setAge(-8))
