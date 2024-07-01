// const vehicle = {
//   move() {
//     console.log(`${this.name} Moving`)

//   },
//   stop() {
//     console.log(`${this.name} stoped`)
//   }
// }



// const ship = {
//   name: 'Titanic',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting down')

//   },
//   liftAnchorUp() {
//     console.log('lifting up')
//   },

// }

// ship.move()


// ---------------Getter Setter

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',

// Определение геттера
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// user.setFullName("Tom Hardy")
// console.log(user.fullName)



// Object.setPrototypeOf(ship, vehicle)

// ship.move()


// ------------------------------------------------------ own props

// const vehicle = {
//   move() {
//     console.log(`${this.name} Moving`)

//   },
//   stop() {
//     console.log(`${this.name} stoped`)
//   }
// }



// const ship = {
//   name: 'Titanic',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting down')

//   },
//   liftAnchorUp() {
//     console.log('lifting up')
//   },

// }

// Object.setPrototypeOf(ship, vehicle)

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop)

//   }
// }

console.log(Object.keys(ship).map(item => console.log(item)))

// User constructor

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

User.prototype.sayHi = function () {
  console.log(`Hi, ${this.name}`)
}


const user1 = new User('Tom', 17)

console.log(user1)

user1.sayHi()



console.log('string'.split(''))
console.log(12345..toFixed(2))


