'use strict'
function random(min, max) {
  return Math.round( Math.random() * ( max - min) +  min ) ;
}

function generate(numberOfTestcases, filePath = "./test-data.json"){
  var fs =require("fs");
  var ans = "";
  var stringAns = new Array();
  ans += "[";
  stringAns[0] = "{\"input\":[],\"target\":3,\"output\":-1},";
  stringAns[1]="{\"input\":[1,3],\"target\":2,\"output\":-1},";
  stringAns[2]="{\"input\":[1,3],\"target\":1,\"output\":0},";
  stringAns[3]="{\"input\":[1,3],\"target\":3,\"output\":2},";
  stringAns[4]="{\"input\":[1,3],\"target\":1,\"output\":0}";
  for ( var i = 0; i < Math.min(5, numberOfTestcases); i++)
    ans += stringAns[i];
  for ( var i = numberOfTestcases; i < 5; i++)
    ans += stringAns[i];
  if ( numberOfTestcases >= 5 ) ans += ",";
  var input = new Array();
  var n, target, output;
  for ( var i = 5; i < numberOfTestcases; i++) {
    n = Math.round(Math.random() * 10000 + 5 ) ;
    input[0] = -10000;
    for ( var j = 1; j < n; j++) input[j] = input[j-1] + Math.round(Math.random() * 100 + 5 );
    output = Math.round(Math.random() * ( n - 1 ) );
    target = input[output];
    ans += "{\"input\":[";
    for ( var j = 0; j < n; j++) {
      ans += input[j].toString();
      ans += ",";
    }
    ans += "],\"target\":";
    ans += target.toString();
    ans += ",\"output\":";
    ans += output.toString;
    ans += "},";
  }
  ans = ans.substring(0,ans.length-1);
  ans += "]";
  return ans;
  // return Array.from(Array(numberOfTestcases)); // Remove this line and change to your own algorithm
}
module.exports = generate
