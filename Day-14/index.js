//Object
// var myObject = {key : value} ; object is a key value pair, we can store multiple key & values.

var myDetails = {
  name: "Nehal Shaikh",
  age: 20,
  weight: "67 Kg",
  isStudent: true,
  isEmployed: false,
  myFriends: ["Ehtesham", "Sufiyan", "Amaan", "Affan"],
};
console.log(myDetails, "myDetails");
console.log(myDetails.age, "age");
console.log(myDetails.name, "name");
console.log(myDetails.myFriends, "myFriends");

var myInstitute = new Object();
myInstitute.name = "Saraswati College";
myInstitute.age = 20;
myInstitute.location = "Kharghar";
myInstitute["student counts"] = 70;
myInstitute["isOpen"] = true;
console.log(myInstitute, "myInstitute");

var myData = { name: "Nehal", age: 20, isClose: true };
// console.log(myData, "Before update");
// myData.name = "Nehal Shaikh";
// myData.age = 21;
// myData.isClose = false;
// console.log(myData, "After Update");
// console.log("money" in myData)
// console.log("name" in myData)
// delete myData.isClose;
// console.log(myData)

for (var key in myData) {
  console.log(key);
  console.log(key, myData[key]);
}

var myCollege = {
  name: "Awdiz",
  stdCount: function () {
    console.log(60);
    console.log(this.name);
  },
};
console.log(myCollege.stdCount());


myUni = {name: "kalsekar", age: 20, itStudents : {batch1: 50, batch2: 62, batch3: 40}};

const {name, age, itStudents} = myUni;
const {batch1, batch2, batch3} = itStudents;
console.log(name, age, batch1, batch2, batch3);