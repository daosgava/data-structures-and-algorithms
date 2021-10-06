/*
  Selection Sort

  The idea is to pass-through the array looking for the lowest value and track its position
  Once we find it, it should be placed at the begining of the array which
  it will be different for each pass-through, the first pass-through it will be index 0,
  the second index 1, third index 2, and so on.
*/

let selectionSort = (arr) => {
  let indexOfLowestNum = null;
  let temp = null;

  for(let i = 0; i < arr.length - 1; i++) {
      indexOfLowestNum = i;

      for(let j = i + 1; j < arr.length; j++) {
          if(arr[indexOfLowestNum] > arr[j]) {
              indexOfLowestNum = j;
          }
      }

      if(indexOfLowestNum !== i) {
          temp = arr[i];
          arr[i] = arr[indexOfLowestNum];
          arr[indexOfLowestNum] = temp;
      }
  }

  return arr;
};

module.exports = selectionSort;