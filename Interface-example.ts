
interface Employee {
    name:string,
    age:number,
    readonly doj?:Date,
    skills:Array<string>
    position:string,
    work:string,
    salaryDetail:SalaryStrcture
}

interface SalaryStrcture {
    basic:number,
    hra:number,
    pf:number,
    tax:number
    bonus?:number     // optional type
}



var employee:Employee = {
    name:"Sivaramakirshana",
    age:53,
    skills:["react","angular","node"],
    position:"Manger",
    work:"chennai",
    salaryDetail:{
        basic:5000,
        hra:200,
        pf:258,
        tax:20

    }
}

employee.name = "siva savithiri"
employee.position = "vice precident"


console.log("employeeData======>",employee)



