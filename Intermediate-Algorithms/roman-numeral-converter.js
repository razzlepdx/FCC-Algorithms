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
