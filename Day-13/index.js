//Nested For loop - Day - 13
//find & print all pairs of elements in the array that sum up to a given target.

var array = [2, 3, 6, 7, 2, 4, 6, 8, 99, 3, 5, 12, 13, 18];
var target = 16;

for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
        if (array[i] + array[j] == target){
            console.log(array[i] + " + " + array[j], " = ", target)
        }
    }
}

//find & print all pairs of elements in the array that subtract & result a given target.

var array2 = [2, 3, 6, 7, 2, 4, 6, 8, 99, 3, 5, 12, 13, 18];
var target2 = 2;

for (let p = 0; p < array2.length; p++){
    for(let q = p + 1; q < array2.length; q++){
        if(array2[p] - array2[q] == target2){
            console.log(array2[p] + " - " + array2[q], " = ", target2);
        } else if (array2[q] - array2[p] == target2) {
            console.log(array2[q] + " - " + array2[p], " = ", target2);
        }
    }
}

//find & print all pairs of elements in the array that divides & result a given target.

var array3 = [2, 3, 6, 7, 2, 4, 6, 8, 99, 3, 5, 12, 13, 18];
var target3 = 2;

for (let x = 0; x < array3.length; x++){
    for(let y = x + 1; y < array3.length; y++){
        if(array3[x] / array3[y] == target3){
            console.log(array3[x] + " / " + array3[y], " = ", target3);
        } else if (array3[y] / array3[x] == target3) {
            console.log(array3[y] + " / " + array3[x], " = ", target3);
        }
    }
}