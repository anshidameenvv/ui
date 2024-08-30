import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
 



  constructor(private httpClient:HttpClient) { }

  getEmail() :Observable<any>
  {
    return this.httpClient.get<string[]>("http://localhost:8099/getEmail");


  }
  public SendMessage(subject: String, body: String): Observable<any> {
    console.log(subject);
    const url = `http://localhost:8099/wishes?subject=${subject}&body=${body}`;
    const data = { subject: subject, body: body };
    console.log(url)
    return this.httpClient.post(url, data);
  }
  public getCount():Observable<any>{
            return this.httpClient.get("http://localhost:8099/getCount");
  }
}
