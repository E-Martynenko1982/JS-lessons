'use strict'

const event = {
  guests: [
    { name: "John", email: "example@server.com", age: 18 },

  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email
      }));
  },
}

console.log(event.getInvitations())

