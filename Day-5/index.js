var number = 50;
var target = 30;

function checkNumberIsGreaterThanTarget(number, target) {
  if (target > number) {
    return "Target is greater than number.";
  }
  return "Number is greater than target.";
}

console.log(checkNumberIsGreaterThanTarget(number, target));

var num1 = 898847644564830;

function findNumberIsEvenOrOdd(num1) {
  if (num1 % 2 == 1) {
    console.log("num1 = ", num1, "is an odd number");
  } else {
    console.log("num1 = ", num1, "is an even number");
  }
}

findNumberIsEvenOrOdd(num1);

//array [, , , ,]

var myName = "Nehal";
var myAge = 20;
var myFavCar = "Jaguar";
var myGender = "Male";
var myDetails = [myName, myAge, myFavCar, myGender, true, false, 100];
console.log(myDetails);

var students = [
  "swaraj",
  "nehal",
  "usman",
  "kalim",
  "harshit",
  "khatija",
  "last element",
];
console.log(students.length);
console.log(students.length - 1);
console.log(students[students.length - 1]);
console.log(students[Math.ceil(students.length / 2) - 1]);

// console.log(Math.floor(23.5)); -> 23
// console.log(Math.ceil(23.5)); -> 24

var array = [1];
console.log("before push : ");
console.log(array);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
console.log("after push : ");
console.log(array);
console.log("after pop : ");
array.pop();
array.pop();
console.log(array);
array.unshift(0); //pushes value at 0 index.
console.log("after unshift : ");
console.log(array);
array.shift();
console.log("after shift : ");
console.log(array);
