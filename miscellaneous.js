function my_max(array) {
  var max = array[0];
  for (var i = 1, iCnt = array.length; i < iCnt; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}