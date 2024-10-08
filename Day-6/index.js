// Loops -> For loop & While Loop
//For Loop
// for (starting; ending; sequence) {
//      multiple lines of code
//  }
// Print Numbers From 1 - 10

// var num = 17;
// num--;
// num += 2;
// num++;
// num = num - 1;
// num -= 1;
// console.log(num);

//Print Numbers from 1-5
console.log("Numbers From 1 - 5 :");
for (var myNum = 1; myNum <= 5; myNum++) {
  console.log(myNum);
}

//Print Even Numbers between 1-20
console.log("Even numbers between 1 - 20 :");
for (var myNum1 = 1; myNum1 <= 20; myNum1++) {
  if (myNum1 % 2 == 0) {
    console.log(myNum1);
  }
}

//Print Odd Numbers between 1-20
console.log("Odd numbers between 1 - 20 :");
for (var myNum1 = 1; myNum1 <= 20; myNum1++) {
  if (myNum1 % 2 == 1) {
    console.log(myNum1);
  }
}