// Diff between var let and const

//              var                         let             const
//re-assign     true                        true            false
//re-declare    true                        false           false
//scope         global-scope/function       block-scope     block-scope
//hoisting      true                        false           false

//let -> variable

// let kuchbhi = 12;
// console.log(kuchbhi);
// kuchbhi = 14;
// console.log(kuchbhi);
// let kuchbhi = 16;
// console.log(kuchbhi);

//const

// const myNum = 20;
// console.log(myNum);
// myNum = 30;
// console.log(myNum);
// const myNum = 40;
// console.log(myNum);

// {

// } -> block

// var myNumber = 20;

// Hoisting

// number = 59;
// console.log(number);
// var number;

// number1 = 69;
// console.log(number1);
// let number1;

// number2 = 79;
// console.log(number1);
// const number2;

//Conditional Statement
//if else

// var num1 = 31;
// var num2 = 30;

// if (num1 > num2) {
//   console.log(num1, "is greater than", num2);
// } else {
//   console.log(num2, "is greater than", num1);
// }



// let -> varible
let kuchbhi = 12;
console.log(kuchbhi);
kuchbhi = 14;
console.log(kuchbhi);
// let kuchbhi = 16;
console.log(kuchbhi);

// const myNumber = 20;
// console.log(myNumber);
// myNumber = 30;
// console.log(myNumber);
// const myNumber = 40;
// console.log(myNumber);
// {

// } -> block

// {
// //   var myNumber = 20;
//   console.log(myNumber);
// }
// console.log(myNumber);

// {
//   {
//     let myNumber = 20; // first version
//     console.log(myNumber);
//   }
//   console.log(myNumber);
// }
// console.log(myNumber);

// {
//   {
//     const myNumber = 20; // first version
//     console.log(myNumber);
//   }
//   console.log(myNumber);
// }
// console.log(myNumber);

// Hoisting

var myNum;
console.log(myNum, typeof(myNum));

// line by line execution
// 2 rounds

// initilization
// execution

myNumber1 = 70;
console.log(myNumber1);
var myNumber1;
// myNumber2 = 20;
// console.log(myNumber2);
// let myNumber2;
// myNumber3 = 20;
// console.log(myNumber3);
// const myNumber3;

var number = 20;
console.log(number);
number = 30;
console.log(number);

// Conditional statements
// if else
// if(conditions){
//     statement 1
// } else {
//     statement 2
// }

var num1 = 20;
var num2 = 30;

console.log(num1 > num2);

console.log(num1 == num2);

if (num1 > num2) {
  // if -> true
  console.log(num1, "is greater.");
} else if (num1 == num2) {
  // else if -> true
  console.log(num1, "is equal to num2.");
} else if (num1 == num2) {
  // else if -> true
  console.log(num1, "is equal to num2.");
} else {
  // false
  console.log(num2, "is greater.");
}