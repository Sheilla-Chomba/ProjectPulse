import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiConnectService {
  
  constructor(private http: HttpClient) {}

  signUpUser(
    f_name: string,
    l_name: string,
    email: string,
    password: string
  ): Observable<any> {
    const userData = {
      f_name: f_name,
      l_name: l_name,
      email: email,
      password: password,
    };
    return this.http.post<{ message: string; error: string }>(
      'http://localhost:4100/users',
      userData
    );
  }
  
}
