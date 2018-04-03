import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-department',
    template: `<h1>Employee Department</h1>
        <ul *ngFor="let employee of employees"><li>{{employee.name}} => {{employee.department}}</li></ul> `
})

export class EmployeeDepartComponent implements OnInit{
    employees = [];
    

    constructor(private _employeeService: EmployeeService){ 
        console.log("Employee Department constructor service called"); 

    }

    ngOnInit(){
        console.log(" Employee List ngonit")

        this._employeeService.getEmployees()
        .subscribe(resEmployeeData =>this.employees = resEmployeeData);            
            console.log("EMP Department!!!")
        //)

    }


}