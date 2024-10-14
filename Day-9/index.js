// While loop
//Syntax :
// starting;
// while (ending) {
//   Code;
//   sequence;
// }
//Q. Print Numbers from 1 - 10;
var num1 = 1;
while(num1 <= 10){
    console.log(num1);
    num1++;
}

var i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

// Given an array, Count total number of even numbers present in an array, using while loop;

var myArray = [1, 2, 3, 5, 6, 7, 19, 21, 42];
var i = 0;
var count = 0;
while (i < myArray.length){
    if (myArray[i] % 2 == 0){
        count++;
    }
    i++;
}
console.log(count, "Count");


// Not Equal to : !=

console.log(1 == 2); //False
console.log(1 != 2); //True
console.log(1 != "1"); //Checks only data hence False
console.log(1 !== "1"); //checks data type too hence true

var number = 2;
console.log(number % 2 != 0); //This checks odd, False