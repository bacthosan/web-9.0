var a = 5;
var b = 6;
console.log(a+b)
console.log("Hello world");
// function Plus(a,b) {
//     return a + b;
// }
var Plus = (a,b) =>  {
  return a + b;
}
function Minus(a,b) {
  return a - b;
}
Minus.property1 = 1;
var exampleObject =  {
  objectfuntioin : Plus
}
var objectMinusFuntion = Minus;
console.log('tong a va b ',exampleObject.objectfuntioin(a,b));
console.log('a - b = ',objectMinusFuntion(a,b));
console.log(typeof(exampleObject));
//
// function writeData() {
//   console.log(Date.now());
// }
// function settimeout(callback) {
//   setTimeout(function() {
//     console.log("call back 2");
//     callback();
//   },5000);
//   console.log("set time out done");
// }
// settimeout(writeData);

// function countDown(count){
//   for(let i = count; i >= 0; i--){
//     setTimeout(function() {
//       //  write(i);
//       console.log(i);
//     },(count-i)*1000);
//   }
// }
// console.log("count down");
// countDown(6);

function print2() {
  let b = 6;
  function print() {
    let a = 5;
    console.log(a,b);
  }
  print();
}
print2();
// const print = () => {
  //
// }
// const print = function() {
//
// }
  
