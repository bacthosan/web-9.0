'use strict'

function sort(input) {
  return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  for ( var i = 0; i < input.length; i++ )
  for ( var j = i; j < input.lenght; j++ )
    if ( input[i] > input[j] ) {
      var tmp = input[i];
      input[i] = input[j];
      input[j] = tmp;
    }
    return input;
}

module.exports = sort
