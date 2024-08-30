import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leads } from 'src/app/Model/leads';

@Injectable({
  providedIn: 'root'
})
export class NewLeadsSerService {
  
  

  constructor(private httpClient: HttpClient) { }

  addNewLeads(leads: any):Observable<any>{
    return this.httpClient.post("http://localhost:8099/addCustomers", leads, { responseType: 'text' })
  }
  private apiUrl = 'http://localhost:8099/getCustomers';
  getAllCustomers() :Observable<any> {
     return this.httpClient.get("http://localhost:8099/getCustomers");
    // return this.httpClient.get<any>(`${this.apiUrl}`);
  }

  formDatas:any;
  setFormData(data: any) {
    this.formDatas = data;
    
  }

  getFormData() {
    return this.formDatas;
  }
  
}
