// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers 
// and all numbers between them.

function sumAll(arr) {
  var sum = 0;
  var max = Math.max(arr[1], arr[0]);
  var min = Math.min(arr[1], arr[0]);
  
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

//////////////////////////////////

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the 
// two given arrays, but not both. In other words, return the symmetric difference of 
// the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  //interate over the length of each array (ln 6 and ln 11)
  //call indexOf on the array that isn't named in the for loop setup
  //if indexOf(arr[i]) returns -1, it is unique, push to new array.  
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
  }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

////////////////////////////////////

