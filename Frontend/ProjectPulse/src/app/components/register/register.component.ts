import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup,FormControl } from '@angular/forms';
import { ApiConnectService } from '../../services/api-connect/api-connect.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    public apiConnect: ApiConnectService
  ) {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    // console.log(this.registerForm);

    if (this.registerForm.valid) {
      // Call the signUpUser method from the ApiConnectionService
      this.apiConnect
        .signUpUser(
          this.registerForm.value.fname,
          this.registerForm.value.lname,
          this.registerForm.value.email,
          this.registerForm.value.password
        )
        .subscribe((response) => {
          console.log(response);
        });

      this.successMessage = 'Signup successful';
      this.showSuccessMessage = true;

      this.registerForm.reset();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.route.navigate(['login']);
      }, 2000);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  navigateToLogin() {
    this.route.navigate(['login']);
  }
}
