//Reverse a String Challenge

function reverseString(str) {
//initial attempt and notes:

  //input needs to be an array
  //separate each item in array by 1 space
 var array = str.split('');
  //reverse order of array
 array.reverse();
  //remove spaces and join back into a single string
 str = array.join('');
 return str;

//or this line:

 //return str.split('').reverse().join('');


//or using a decrementing for loop:

 /*var newStr = '';

 for (i = str.length - 1; i >= 0; i--){
   newStr += str[i];
 }

  return newStr;*/

}

//Factorialize A Number

function factorialize(num) {

//for num <=1
if (num === 0 || num === 1) {
  return 1;
}
//for num > 1
//decrementing while loop:
var i = num-1;
while (i > 0) {
  num *= i;
  i--;
}
//decrementing for loop:
/*
for (i = num -1; i >= 1; i--) {
  num *= i;
} */
  return num;
}

factorialize(5);


//Check for Palindromes

function palindrome(str) {
//make all alphabet characters lowercase
//replace all !abc123 with ''
//assign to strForward
var strForward = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//reverse filtered str and assign to strReverse
var strReverse = strForward.split('').reverse().join('');

//compare strForward with strReverse using ===:
if (strForward === strReverse){
  return true;
  } else {
    return false;
  }
}

//Find the Longest Word in a String

function findLongestWord(str) {
  //solution using .sort() method

  //split string into separate words
  var strSplit = str.split(' ');

  //sort array by relative length >
  var longWord = strSplit.sort(function(a, b) {
    return b.length - a.length;
  });

  //return length of first (longest) element
  return longWord[0].length;


  //solution using for loop

  /*var strSplit = str.split(' ');
  var longWord = '';

  for (i = 0; i < strSplit.length; i++)

    if (strSplit[i].length > longWord.length) {
      longWord = strSplit[i];
    }

  return longWord.length;*/


  //solution using .reduce() method

  /*var strSplit = str.split(' ');

  var longWord = strSplit.reduce(function(longer, currentWord) {
    if (currentWord.length > longer.length) {
      return currentWord;
    } else {
      return longer;
    }
  }, '');

  return longWord.length;*/
}


//Title Case a Sentence


function titleCase(str) {

  var lowerSplit= str.toLowerCase().split('');

  for (i = 0; i < lowerSplit.length; i++) {
   if (lowerSplit[i - 1] === ' ' || lowerSplit[i] === lowerSplit[0]){
     lowerSplit[i] = lowerSplit[i].toUpperCase();
   }
  }
 return lowerSplit.join('');
}


//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  //create a new empty Array with largest numbers
  //iterate through largestOfFour and define subArrays
  // sort subArrays and arrange in descending order
  //assign largest number (subArray[0]) to largeArr and repeat
  //return largeArr
  var largeArr = [];

  for (i=0; i < arr.length; i++){
    var subArray = arr[i];
    subArray.sort(function (a,b) {
        return b-a;
      });
    largeArr.push(subArray[0]);
  }
    return largeArr;
  }


  function confirmEnding(str, target) {
    //find length of target
    //extract that length from str using .substr()
    //compare extracted str with target to get a true/false answer
    var targetLength = target.length;
    newStr = str.substr(-targetLength);

    return newStr === target;
  }


//Repeat a String


function repeatStringNumTimes(str, num) {

//using repeat method:
  var words = '';
  if (num > 0) {
    words = str.repeat(num);
  }
  return words;

//using a for loop:

 /*newStr = '';
  if (num > 0) {
   for (var i = 0; i < num; i++) {
     newStr += str;
    }
  }

  return newStr;*/
}

//Truncate a String


function truncateString(str, num) {
  newStr = '';
  if (num <= 3) {
    newStr = str.slice(0, num) + "...";

  } else if (str.length <= num) {
    newStr = str;
  } else {
    shortStr = str.slice(0, num -3);
    newStr = shortStr + "...";


  }
  return newStr;
}


//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  /*using splice
  //make empty array to push small arrays into.
  //find number of possible chunks and assign to variable
  //use for loop (number of chunks) time and splice 0 through size,
  //assign to temp "chunk" array
  //push to empty array
  //outside for loop, return (not) empty array
  var bigArray = [];
  var numberOfChunks = arr.length / size;


  for (var i = 0; i < numberOfChunks; i++) {
    var chunkArr = arr.splice(0, size);
    bigArray.push(chunkArr);
  }*/

  //using slice
  bigArray = [];

  for (var i = 0; i < arr.length; i += size) {
    bigArray.push(arr.slice(i, i+size));
  }


  return bigArray;
}


//Slasher Flick

function slasher(arr, howMany) {
  if (howMany === 0) {
    return arr;
  } else {
  return arr.slice(arr.splice(0,howMany)+1);
  }
 }

 //Mutations
//Returns true if the string in the first element of the array contains all of the letter of the string in the second element of the array

 function mutation(arr) {
  var strTarget= arr[0].toLowerCase();
  var strTest = arr[1].toLowerCase();
  for (var i = 0; i < strTest.length; i++){
     if (strTarget.indexOf(strTest[i]) < 0) {
       return false;
     }
  }
  return true;
}

//Falsy Bouncer - given an array of values - removes all false values and returns the filtered array

function bouncer(arr) {
 var isTrue = arr.filter (
   function(trueIndeed){
     return trueIndeed;
   }
   );
 return isTrue;
}

//Seek and Destroy - given an array followed by two other arguments, removing all matching values
//from the array and return the filtered array

function destroyer(arr) {
  //make arguments into full array
  var argsArray = Array.prototype.slice.call(arguments);
  //remove first element to test against
  argsArray.splice(0,1);
  //filter arr using indexOf to return only non-matches
  return arr.filter(
    function(match) {
      return argsArray.indexOf(match) === -1;
    }
  );
}

//Where do I belong
//Given an array of values followed by a single argument, sort all values and return the position of the second argument

function getIndexToIns(arr, num) {
  //put all args in an array
  var argArray = Array.prototype.slice.call(arguments);
  //join into single array and sort by size
  var Joinedsorted = argArray[0].concat(argArray[1]).sort(function(a,b) {
    return a-b;
  });
  //return index of, searching findIt
  return Joinedsorted.indexOf(num);
}

//Caesar's Cipher

function rot13(str) {

  //create new string array
  var codeArr = [];
  //iterate through the plaintext string
  for (i=0; i < str.length; i++)
  {
    //identify charCode for each letter
    var cipherChar = str.charCodeAt(i);
      //if alphanumeric, add thirteen positions to each letter
      if ((cipherChar >= 65 && cipherChar <= 90))
        {
          var encrypted = cipherChar + 13;
          //check for characters pushed outside of alphabet and sub 26
          if (encrypted > 90)
            {
              encrypted -= 26;
            }
          //push encrypted character to array
          codeArr.push(String.fromCharCode(encrypted));
        }
    else //push non-alpha characters to array with no changes
        {
          codeArr.push(String.fromCharCode(cipherChar));
        }
  }
  //return joined array
  return codeArr.join('');

}
