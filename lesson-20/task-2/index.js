class Vehicle {
  constructor(name, numberOfWheels) {
    this.hasWheels = numberOfWheels;
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
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
    this.numberOfWheels = numberOfWheels;
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