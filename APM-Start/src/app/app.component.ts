import {Component} from '@angular/core';
import { ProoductService } from './product/product.service';
@Component(
  {
   selector : 'pm-root',
   template : `<h1>{{pageTitle}}</h1>
    <nav>
              <a routerLink = "/employeelists" routerLinkActive="active">EmployeeLists</a> 
              <a routerLink = "/employeedetails" routerLinkActive="active">EmployeeDetails</a>   
             </nav>
             <!-- <router-outlet></router-outlet> -->
    <employee-list></employee-list>
    <employee-details></employee-details> `,
  
  // providers : [EmployeeService]
  }
)
export class AppComponent{
  //pageTitle : string = 'New Employee Management'
  pageTitle : string = 'Angular App'

}