import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail.component';
//import { EmployeeDepartComponent } from './employee-department';


@NgModule({
  imports: [ 
    BrowserModule,
     FormsModule,
     HttpModule,
      RouterModule.forRoot([
       { path: 'employeelists', component: EmployeeListComponent},
       { path: 'employeedetails', component: EmployeeDetailComponent}
      // { path: 'employeedepartment', component: EmployeeDepartComponent}
     ])
    ],
  declarations: [
      AppComponent,
      ProductListComponent,
      ConvertToSpacesPipe,
      StarComponent,
      EmployeeListComponent,
      EmployeeDetailComponent
    //  EmployeeDepartComponent
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
