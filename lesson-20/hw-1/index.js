class Order {
  constructor(price, city, type) {
    this.id = this.generateRandomId();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  generateRandomId() {
    return Math.random().toString(36).substring(2, 9);
  }

  checkPrice() {
    return this.price > 1000

  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    const validTypes = ['Buy', 'Sell'];
    return validTypes.includes(this.type);
  }
}