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
