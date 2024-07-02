class User {


  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }



  get id() {
    return this.i_d;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }


}

class UserRepository {

  constructor(users) {

    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name)
  }

  getUserIds() {
    return this._users.map(user => user.id)
  }

  getUserNameById() {
    const user = this._users.find(user => user._id === id);
    return user ? user.name : null
  }

}

// const user = new User('1', 'Tom', 'session-id');
// console.log(user._id);
// console.log(user._name)
// console.log(user._sessionId)


const users = [
  new User(1, 'Ivan', 'session1'),
  new User(2, 'Petro', 'session2'),
  new User(3, 'Anna', 'session3'),
];

console.log(UserRepository.getUserNames);
























// class Dog {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   // set name(name) {
//   //   this._name = name;
//   // }
// }
// const myDog = new Dog('Rex');
// console.log(myDog.name); // ===> 'Rex'
// myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
// console.log(myDog.name); // ===> 'Buddy'
