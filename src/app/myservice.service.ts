import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldata=[];
  private apiurl="http://jsonplaceholder.typicode.com/users";
  private apiurl2="https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.apiurl)
  }
  getphotoData(){
    return this.http.get(this.apiurl2)
  }

  showTodayDate(){
    let ndate=new Date();
    return ndate;
  }
}
