class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compare(user1, user2) {
    return user1.age - user2.age;
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

const user1 = new User("Tom", 17);
const user2 = new User("John", 22);
console.log(User.compare(user1, user2));



// --------------parent
class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`)

  }
  stop() {
    console.log(`${this.name} stopped`)
  }
}



class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move()
  }
  stop() {
    super.stop()
    console.log(`${this.name} lifting anchor down`)

  }

}



const ship1 = new Ship("Titanic", 200)
console.log(ship1);
ship1.move()
ship1.stop()


// ------------------private

class Wallet {
  #balance = 0
  constructor() {
    this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withDraw(amount) {
    if (amount > this.#balance) {
      console.log('No enough funds')
      return
    }
    this.#balance -= amount;
  }
}

const wallet1 = new Wallet()



console.log(wallet1.#balance);
