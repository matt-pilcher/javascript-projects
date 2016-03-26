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
   var vowels=['A','E','I','O','U','Y'];
   var count=0;
    for (var i = 0; i < string.length; i++){
        if (vowels.indexOf(string[i].toUpperCase()) != -1) {
            count ++;
        }
    }
    return count;
};



