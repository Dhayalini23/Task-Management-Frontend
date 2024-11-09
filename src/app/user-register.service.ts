import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http:HttpClient) {
   }
   AddRegisterUser(UserRegister:IUserRegister){
    return this.http.post('http://localhost:5198/api/UserLogin/auth/register',UserRegister)
   }
}

export interface IUserRegister{
id:number;
fullName:string;
email:string;
password:string;
role:any;
}