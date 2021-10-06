const selectionSort = require('./algorithms/selectionSort');
const arrForSelectionSort = [4,3,5,6,1,1,8,9,2];
console.log(`
  ### Selection Sort ###
  selectionSort([${arrForSelectionSort}]);
  result: [${selectionSort(arrForSelectionSort)}]
`);