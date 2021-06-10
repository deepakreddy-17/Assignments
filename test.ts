class Employee{
    empName:string;
    empAge:number;
    constructor(name:string, age:number){
        this.empName = name;
        this.empAge = age;
    }
    getEmployeInfo(){
        return `EmployeeName:${this.empName} and EmployeeAge:${this.empAge}`
    }
}
let emp1 = new Employee('suresh kumar', 25) //1st line
let emp2 = new Employee('Swetha', 23) 

console.log(emp1.empName, emp1.empAge)
console.log(emp2.empName, emp2.empAge)
console.log(emp1.getEmployeInfo())
console.log(emp2.getEmployeInfo())
