"use strict";
function sampleFunction() {
    console.log("hello world");
}
sampleFunction();
function sumOfnumbers(a, b) {
    return a + b;
}
let sumofResult = sumOfnumbers(100, 5);
console.log("sumofResult====>", sumofResult);
function printThenvalues(...param) {
    for (let item of param) {
        console.log("item====>", item);
    }
}
printThenvalues(51, 52, 53, 54, 55, 56);
