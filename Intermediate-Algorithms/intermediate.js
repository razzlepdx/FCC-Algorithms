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

//Roman Numeral Converter
//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  // make an array of possible single digit input numbers
  var numbers = ["1", '2', '3', '4', '5', '6', '7', '8', '9'];
    
  //list all possible roman numeral values, separated by place (ones, tens, hundreds, thousands)
  var key = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']
    ];
    
  //reformat number into a split list of individual digits, and reverse order [ones, tens, hundreds, thousands]
  var roman = num.toString().split('').reverse();
  //loop over array, and replace each digit with the roman equivalent 
  for (var i = 0; i < roman.length; i++){
    var digit = roman[i];
    roman.splice(i, 1, key[i][numbers.indexOf(digit)] );
            
  }
  //reverse the array and join back into a string before returning numeral
  return roman.reverse().join('');
}
convertToRoman(16);

//////////////////////////////////////
