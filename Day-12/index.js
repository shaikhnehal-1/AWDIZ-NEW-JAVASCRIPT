//Binary Search - Day 11
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 100;

function BinarySearch() {
  var left = 0;
  var right = array.length - 1;

  while (left <= right) {
    console.log(left, "left", right, "right");
    const midIndex = Math.floor((left + right) / 2);
    console.log(midIndex, "midIndex", array[midIndex]);

    if (array[midIndex] == target) {
      //5 // 2 -> false
      console.log(array[midIndex], target, "array[midIndex] == target");
      return midIndex;
    } else if (array[midIndex] > target) {
      // 5 > 2 -> true
      right = midIndex - 1; //4 - 1 -> 3-> 4
      console.log(array[midIndex], target, "array[midIndex] > target");
    } else if (array[midIndex] < target) {
      left = midIndex + 1;
      console.log(array[midIndex], target, "array[midIndex] < target");
    }
  }
  return "Not Found";
}

console.log(BinarySearch(array, target));
