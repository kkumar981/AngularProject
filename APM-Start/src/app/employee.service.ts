import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService{
     //url: string = "./api/products/employeedata.json"
    constructor(private _http: Http){  //h It is used to refer local instance of http
        console.log("service constructor called");
    } //inject dependency
    getEmployees(){
        console.log("method emp called");
        //return this.http.get(this.url)    //returns an Observable
        return this._http.get("./api/products/employeedata.json")
        .map((response:Response) => response.json()) ;
       // .catch(this._errorHandler);

      // map is an observable operator which calls a function for each item on its input stream and pushes the result of the function to it’s output stream.
    } 
   /* _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "server Error");
        
    } */

} 