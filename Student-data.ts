interface Student {
    reg_number:string,
    stu_name:string,
    address:Address
}

interface Address {
    streetNumber:number,
    streetName:string,
    area:string,
    pincode:number
}

interface StudentMarks extends Student{
    tamil:number,
    english:number,
    compscience:number
}


var studetDetail:StudentMarks = {
    reg_number:"2k1522",
    stu_name:"Rajesh",
    address:{
        streetNumber:22,
        streetName:"car street",
        area:"velachery",
        pincode:600024
    },
    tamil:85,
    english:92,
    compscience:100
}

console.log("StudentMarks====>",studetDetail)