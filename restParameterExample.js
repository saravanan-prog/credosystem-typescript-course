"use strict";
function printThenvalues(...param) {
    for (let item of param) {
        console.log("item====>", item);
    }
}
//printThenvalues(51,52,53,54,55,56)
function studentNameList(schoolname, topStdent, ...students) {
    console.log("School Name ===>", schoolname);
    console.log("Our topper is =", topStdent);
    console.log("Average Studnets :");
    for (let name of students) {
        console.log("names====>", name);
    }
}
studentNameList("DAV matriculation", "kesavan", "madhavan", "vimalan", "rithesh");
