import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(userDetails: {fName:string; lname:string; email: string; password: string }) {
    return this.http.post<{ message: string; token: string; error: string }>('', userDetails).subscribe((res) => {
        console.log(res);
      });
  }
}
