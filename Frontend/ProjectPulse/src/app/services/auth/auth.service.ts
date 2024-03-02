import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginDetails } from "../../interfaces/login.interfaces";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user_details:loginDetails ){
    return this.http.post<{message:string, token:string, error:string}>('http://localhost:4100/auth/login', user_details)
  }

  readToken(token:string){
    
    return this.http.get<{info:{user_id:string, f_name:string,l_name:string, email: string, role:string}}>('http://localhost:4100/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      })
    })
  }
  resetPassword(email:string,password:string):Observable<any>{
    const resetData={
      email,password
    }
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/auth/reset_pwd`,resetData,
    {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })
  }
}
