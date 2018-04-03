import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-details',
    template: `<h1>Employee Details</h1>
     <ul *ngFor="let employee of employees">   <li>{{employee.name}} + {{employee.id}} + {{employee.gender}}</li> </ul> ` 
})

export class EmployeeDetailComponent implements OnInit{
    employees = [];

    constructor(public employeeService: EmployeeService){
        console.log("Employee detail constructor called");

    }

    ngOnInit(){
        console.log(" Employee detail ngonit")

        this.employeeService.getEmployees()
        .subscribe(resEmployeeData =>{
            this.employees = resEmployeeData;
       // console.log(this.employees)
        console.log("EMP DETAIL!!!!!")})

    }


}