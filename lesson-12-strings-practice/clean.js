// func: in-array, out-changed array
// apply filter method to delete elements with letters(out callbeck elements apply Number method)
// then apply to new arr map method with out of callbeck elements concated with '$' sign and changed with methods Number, toFixed and trim

const cleanTransactionsList = arr => arr.filter(el => Number(el))
  .map(el => '$' + Number(el).toFixed(2).trim());


console.log(cleanTransactionsList(['1.9 ', ' 16.4', 17, '1 dollar']));
