class User {


  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get getUserId() {
    return this._id;
  }

  get getName() {
    return this._name;
  }

  get getSessionId() {
    return this._sessionId;
  }


}

class UserRepository {

  constructor(users) {

    this._users = Object.freeze(users);
  }



  getUserNames() {
    return this._users.map(user => user.name)
  }

  getUserIds() {
    return this._users.map(user => user.id)
  }

  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : null
  }

}

const user = new User('1', 'Tom', 'session-id');
console.log(user.getSessionId());






























class Dog {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // set name(name) {
  //   this._name = name;
  // }
}
const myDog = new Dog('Rex');
console.log(myDog.name); // ===> 'Rex'
myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
console.log(myDog.name); // ===> 'Buddy'
