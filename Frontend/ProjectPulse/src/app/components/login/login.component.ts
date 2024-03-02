import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { loginDetails } from '../../interfaces/login.interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMsg!: string;
  successMsg!: string;

  visible = false;
  visible2 = false;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    public authservice: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login(details: loginDetails) {
    if (this.loginForm.valid) {
      console.log(details);

      this.authservice.loginUser(details).subscribe((res) => {
        console.log(res);

        if (res.error) {
          this.visible = true;
          this.errorMsg =
            'Wrong credentials. Kindly make sure you have the right details';

          setTimeout(() => {
            this.visible = false;
          }, 3000);
        } else if (res.message) {
          this.visible2 = true;
          this.successMsg = res.message;

          this.route.navigate(["home"])
          
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  navigateToRegister() {
    this.route.navigate(['register']);
  }
}
