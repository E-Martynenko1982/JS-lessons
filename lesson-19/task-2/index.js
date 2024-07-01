function getOwnProps(obj) {
  return Object.keys(obj).filter(key => typeof obj[key] !== 'function');
}

user = {
  name: 'Tom',
  age: 17,
  getName() {
    console.log(this.name)

  }
}
console.log(getOwnProps(user))

