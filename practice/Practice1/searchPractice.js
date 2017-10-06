'use strict'
function search(input, target) {
  // return input.indexOf(target);  // Remove this line and change to your own algorithm
  var left = 0, right = target.length;
  while ( left <= right ) {
    var mid = ( left + right ) / 2;
    if ( target[mid] === input ) return mid;
    if ( target[mid] > input ) right = mid - 1;
      else left = mid + 1;
  }
  return -1;
}
module.exports = search
