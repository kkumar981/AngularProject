import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    template: `<h1>Employee List</h1>
        <ul *ngFor="let employee of employees"><li>{{employee.name}}</li></ul> <h1>{{errorMsg}}</h1>  `
})

export class EmployeeListComponent implements OnInit{
    employees = [];
    //errorMsg = [];
   
    constructor(private _employeeService: EmployeeService){ //ts shorthand syntax
         //The constructor expects Angular to inject the EmployeeService into a private EmployeeService property.

        console.log("Employee list constructor called"); 

    }

    ngOnInit(){
        console.log(" Employee List ngonit")
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees()
        .subscribe(resEmployeeData =>this.employees = resEmployeeData);
            //resEmployeeError => this.errorMsg = resEmployeeError);
            console.log("EMP Lists!!!")
        //)

    }


}


