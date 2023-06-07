import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }
  public loginStatusSubject = new Subject<boolean>();

  public generateToken(loginData:any){
    return this.Http.post(`${baseUrl}generate-token`,loginData)
  }

  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public getCurrentUser(){
    return this.Http.get(`${baseUrl}current-user`)
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify (user))    
  }

  public getUser()
  {
    let userStr=localStorage.getItem('user');
    if(userStr !=null){
      return JSON.parse(userStr);
    }else{
      return null
    }
  }

  public getUserRol(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true
  }


  public isLogdIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == "" || tokenStr == null){
      return false;
    }else {
      return true;  
    }
  }
}
