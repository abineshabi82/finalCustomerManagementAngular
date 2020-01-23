import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './cusModel';
import { CustomersServiceService } from './customers-service.service';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class CusService {

  constructor(private http:HttpClient) {
    
   }

  public getCus():Observable<CustomersServiceService[]>{
    return this.http.get<CustomersServiceService[]>("http://localhost:9090/get/customers");
  }

  public searchCus(s:String):Observable<CustomersServiceService[]>{
    const cus:any=this.http.get<CustomersServiceService[]>("http://localhost:9090/get/customers");
    return cus.filter(x=>x.name===s);
  }

  addCustomer(customer:ICustomer){
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.post<ICustomer>("http://localhost:9090/post/customer",body,options);
  }

  updateCustomer(customer: ICustomer) {
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.put<ICustomer>("http://localhost:9090/put/customer/"+customer.id,body,options);
  }

  deleteCustomer(customer:ICustomer){
    return this.http.delete("http://localhost:9090/delete/customer/"+customer.id);
  }

}
