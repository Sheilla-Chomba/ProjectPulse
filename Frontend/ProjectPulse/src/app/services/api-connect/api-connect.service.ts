import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewUsers } from '../../interfaces/view-users';
import { Register } from '../../interfaces/register';


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

  getUsers() {
    interface info {
      users: ViewUsers[];
    }

    return this.http.get<info>('http://localhost:4100/users');
  }
   getOneUser(id:string){
    return this.http.get<{user:Register}>(`http://localhost:4100/users/${id}`
    , {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'token': this.token
      })
    })
  }
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:4100/users/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    });
  }
}
