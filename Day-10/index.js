// Day 10 JS - Nehal Shaikh
// Q. Print numbers from array who are odd by using while loop:
var array = [23, 56, 78, 99, 322, 456, 678, 877];
var i = 0;
while (i < array.length) {
  if (array[i] % 2 != 0) {
    console.log(array[i]);
  }
  i++;
}

var array2 = [27, 56, 78, 97, 322, 456, 673, 877];
var oddArray = [];
var j = 0;
while (j < array2.length) {
  if (array2[j] % 2 != 0) {
    oddArray.push(array2[j]);
  }
  j++;
}
console.log(oddArray);

// Print all numbers except target using !=
var array3 = [23, 56, 78, 99, 322, 456, 678, 877];
var target1 = 322;
var target2 = 56;
var i = 0;
while (i < array3.length) {
  if (target1 != array3[i] && target2 != array3[i]) {
    console.log(array3[i]);
  }
  i++;
}