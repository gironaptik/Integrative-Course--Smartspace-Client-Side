import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userEmail:string;
  invalidLogin:boolean;


  constructor(private http: HttpClient) {
  }

  login(smartspace:string, email: string){
    let url = "http://localhost:8089/smartspace/users/login/"+smartspace+"/"+email;
    this.userEmail = email;
    return this.http.get<UserBoundary>(url).subscribe(response=> {location.replace('/'),
    localStorage.setItem('role', response.role),
    localStorage.setItem('token', email),
    localStorage.setItem('smartspace', smartspace),
    localStorage.setItem('points', String(response.points))},
    (error:Response) => {
        this.invalidLogin = true;
      })
  }

  updatePoints(smartspace:string, email: string){
    let url = "http://localhost:8089/smartspace/users/login/"+smartspace+"/"+email;
    return this.http.get<UserBoundary>(url).subscribe(response=> localStorage.setItem('points', String(response.points)));
  }

  curretUser(smartspace:string, email: string){
    let url = "http://localhost:8089/smartspace/users/login/"+smartspace+"/"+email;
    return this.http.get<UserBoundary>(url);
  }

  update(model:UserBoundary){
    let url = "http://localhost:8089/smartspace/users/login/"+localStorage.getItem('smartspace')+"/"+localStorage.getItem('token');
    return this.http.put<UserBoundary>(url, model, httpOptions);
  }

  register(model:NewUserForm){
    let url = "http://localhost:8089/smartspace/users";
    this.http.post(url, model, httpOptions).subscribe(
     res => {location.replace('/')},
     err => {
       alert(model.username)
     } 
    ) 
  }

  getUserEmail(){
    return this.userEmail;
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('points');
 }

 isInvalidLog(){
   return this.invalidLogin;
 }

 isLoggedIn(){
  if(localStorage.getItem('token'))
    return true;
  return false;
}

userRole(){
  if(localStorage.getItem('role') == "MANAGER")
    return true;
  return false;
}

}

export class NewUserForm{
  username: string;
  email: string;
  avatar: string;
  role: string;
}

export class UserBoundary{
  key:BoundaryEmailKey;
  username: string;
  avatar: string;
  role: string;
  points: number;

}

export interface BoundaryEmailKey{
  email:string;
  smartspace:string;
}