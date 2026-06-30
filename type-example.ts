type CandidateAge = string | number
let candidateAge:CandidateAge = 25
console.log("CanidateAge====>",candidateAge)




type BasicDetails = {
    student_name:string,
    student_age:number,
    student_course:string
}

type StudetMarks = {
    tamil:number,
    english:number
}

type Student = BasicDetails & StudetMarks

var student:Student = {
    student_name:"Ravi",
    student_age:25,
    student_course:"React",
    tamil:50,
    english:75
   
}