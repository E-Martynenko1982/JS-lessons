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

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enough funds')
      return
    }
    this.#balance -= amount;
  }
}