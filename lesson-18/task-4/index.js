


function saveFuncCalls(func) {


  function withMemory(...args) {

    // Add the arguments of each call to the call history
    withMemory.callsHistory.push(args);

    return func.apply(this, args);
  }


  withMemory.callsHistory = [];
  return withMemory;
}
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]

