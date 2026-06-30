type CandidateAge = string | number;

let candidateAge: CandidateAge = 25;

console.log("CandidateAge ===>", candidateAge);

type BasicDetails = {
    student_name: string;
    student_age: number;
    student_course: string;
};

type StudentMarks = {
    tamil: number;
    english: number;
};

// Intersection Type
type Student = BasicDetails & StudentMarks;

let student: Student = {
    student_name: "Ravi",
    student_age: 25,
    student_course: "React",
    tamil: 50,
    english: 75
};

console.log(student);