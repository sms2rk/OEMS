import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public saveUser(signInData:any){
    return this.http.post(`${baseUrl}user/`, signInData, {responseType:'text'});
  }

  public deletUser (userId:any){
    return this.http.delete(`${baseUrl}user/`, userId);
  }
}
