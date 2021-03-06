// Returns highest number in an array
var my_max = function(array){
 var max=array[0];   
    for (var i = 0; i < array.length; i++){
        if (array[i] > max) {
            max=array[i];
        }
    }
   return max;
};

my_max([3,4,3,5,6,80]);

// Takes a string and returns the number of vowels

var vowel_count = function(string) {
   var vowels = ['A','E','I','O','U','Y'];
   var count = 0;
    for (var i = 0; i < string.length; i++){
        if (vowels.indexOf(string[i].toUpperCase()) != -1) {
            count ++;
        }
    }
    return count;
};

// Reverses the order of a string

var reverse = function(string) {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    return reverse;
};

reverse("my name is");

// Checks for a palindrome

function palindrome(string) {
  string.toLowerCase();
  var reverse = string.split('').reverse().join('');
  if (string === reverse) {
     return true;
  }
  else {
     return false;
  }
};

console.log(palindrome('test')); // Returns false
console.log(palindrome('refer')); // Returns true

// Checks if a given word has letters arranged in alphabetical order

function orderChecker(word) {
  if (word == word.split('').sort().join('')) {
    return 'IN ORDER';
  } else if (word == word.split('').sort().reverse().join('')) {
    return 'IN REVERSE ORDER';
  } else {
    return 'NOT IN ORDER';
  }
};

orderChecker("almost"); // This word has the letters arranged alphabetically
orderChecker("cereal"); // These letters are not
orderChecker("wronged"); // These letters are in reverse order

// Bubble Sort

function bubbleSort(array) {
   var len = array.length;
   for (var i = len - 1; i >= 0; i--) {
     for(var j = 1; j <= i; j++){
       if(array[j - 1] > array[j]) {
           var temp = array[j - 1];
           array[j-1] = array[j];
           array[j] = temp;
        }
     }
   }
   return array;
}

bubbleSort([7,5,2,4,3,9]);

// Determine if a number is prime

function prime(num) {
    var divider = 2; 
    
    while (num > divider) {
        if (num % divider === 0 ) {
            return false;
        } else {
            divider++;
        }
    }
    return true;
}

prime(4); // Return false
prime(5); // Return true

// Find the prime factors of a number

function findFactors(num) {
  var divider = 2, 
      factorList = [];
  
  while (num > 2) {
    if (num % divider === 0) {
       factorList.push(divider); 
       num = num / divider;
    }
    else {
      divider++;
    }     
  }
  return factorList;
}

findFactors(24); // Output Array [ 2, 2, 2, 3 ]

// Remove duplicate numbers from an array

function removeDuplicate(array) {
  var exists = {},
      newArray = [], 
      element;

  for(var i =0; i < array.length; i++){
    element = array[i];
    if (!exists[element]) {
      newArray.push(element);
      exists[element] = true;
   }
  }
  return newArray;
}

removeDuplicate([2,4,1,5,1,2,8,2]); // Output Array [ 2, 4, 1, 5, 8 ]

// Reverse words in a sentence

function reverseWords(string) {
 var reverse = [], 
     wordLength = 0;
     
 for(var i = string.length - 1; i >= 0; i--) {
   if (string[i] === ' ' || i === 0) {
     reverse.push(string.substr(i, wordLength + 1));
     wordLength = 0;
   }
   else
     wordLength++;
 }
 return reverse.join('');
}

reverseWords('Testing if each word is reversed'); // reversed is word each if Testing

// Find nth fibonacci number

function fibonacci(num) {
  var fib = [0, 1];
  
  if (num <= 2) return 1;

  for (var i = 2; i <= num; i++ ) { 
      fib[i] = fib[i-1] + fib[i-2];
  }
  
 return fib[num];
} 

fibonacci(7); // Output: 13

// Recursive solution

function fibonacci(num) {

    if (num <= 0) { return 0; }
    if (num <= 2) { return 1; }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(7); // Output: 13

// Remove duplicate characters from a string

function removeDuplicate(str) {
  var length = str.length,
      char, 
      charCount = {}, 
      newStr = [];
      
  for(var i =0; i < length; i++) {
    char = str[i];
    
    if(charCount[char]) {
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  
  for (var j in charCount) {
    if (charCount[j] == 1)
       newStr.push(j);
  }
  return newStr.join('');
}

removeDuplicate("Testing to see if this works"); // Output: Tngfhwrk

// Selection Sort

function selectionSort(array) {
  var min, 
      temp, 
      length = array.length;
  for(var i = 0; i < length; i++) {
    min = i;
    for(var j = i + 1; j < length; j++) {
       if(array[j] < array[min]) {
          min = j;
       }
    }
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort([4,1,2,3,9,5]); // Output: Array [ 1, 2, 3, 4, 5, 9 ]

// Insertion Sort

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

insertionSort([ 5, 6, 4, 1, 3, 12, 4, 1]); // Output: [ 1, 1, 3, 4, 4, 5, 6, 12 ]

//  Combination lock

var comboLock = function(n, x, y, z) {
    var ans = (3*n) + x;
    
    if (y < x) {
        ans = ans + (n - x) + y;
    }
    else {
        ans = ans + (y - x);
    }
    if (z < y) {
        ans = ans + (y - z);
    }
    else {
        ans = ans + (n - z) + y;
    }
    return ans;
};

comboLock(5, 1, 2, 3); // Output: 21