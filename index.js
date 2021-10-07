const { printPretty } = require('./utils');
const selectionSort = require('./algorithms/selectionSort');
const binarySearch = require('./algorithms/binarySearch');

const arrForSelectionSort = [4,3,5,6,1,1,8,9,2];
printPretty(selectionSort, arrForSelectionSort);

const arrForBinarySearch = [1,2,3,4,5,10,100];
const num = 10;
printPretty(binarySearch, arrForBinarySearch, num);
