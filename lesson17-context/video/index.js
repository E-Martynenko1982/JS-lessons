const user = {

  name: 'Doe',

  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old`)
  }
}


// user.getFullName()

// .bind()

// const func = user.getFullName.bind({ name: 'Tom' });
// func()

// call()

// const func = user.getFullName;
// func.call({ name: 'Petro' })

// apply()

const func = user.sayHi;
const anotherUser = {
  name: 'Ivan'
}

func.apply(anotherUser, [17, 'Hello'])
