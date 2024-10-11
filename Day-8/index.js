// Reverse Loop
console.log("Day 8 Practice Questions");
//Print numbers from 10 - 1
function printTenToOne() {
  var array = [];
  for (var i = 10; i >= 1; i--) {
    array.push(i);
  }
  return array;
}
console.log(printTenToOne());

//Print numbers from 25 to 45 who are even

function print45To25Even() {
  var array1 = [];
  for (var i = 45; i >= 25; i--) {
    if (i % 2 == 0) {
      array1.push(i);
    }
  }
  return array1;
}
console.log(print45To25Even());

//

var myNum = [1, 2, 3, 4, 5];

for (var i = 0; i < myNum.length; i++) {
  console.log(myNum[i]);
}

//Print count of odd numbers from array
console.log("Print count of odd numbers from array");
var array2 = [23, 43, 24, 67, 65, 68, 25, 11, 24];
var count = 0;

for (var i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 1) {
    count++;
  }
}
console.log(count);
