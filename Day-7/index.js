//For Loops Questions

for (var i = 30; i <= 60; i += 5) {
  console.log(i);
}

var count = 0;
for (var i = 50; i <= 100; i += 3) {
  count++;
}
console.log(count);

//Print numbers from 10 - 50, with range of two and add 10 for every element and return an array.

function printArray10To50() {
  var array = [];
  for (var i = 10; i <= 50; i += 2) {
    array.push(i + 10);
  }
  // console.log(array);
  return array;
}
console.log(printArray10To50());

//Print count from number 233 to 456, who are odd.

var oddCount = 0;
function countOddNumber() {
  for (var i = 233; i <= 456; i++) {
    if (i % 2 == 1) {
      oddCount++;
    }
  }
  return oddCount;
}
console.log("Total Count of Odd Numbers Between 233 - 456 :", countOddNumber());
