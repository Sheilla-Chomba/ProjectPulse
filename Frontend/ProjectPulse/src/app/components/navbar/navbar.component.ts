import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private route: Router) {}

  navigateToLanding() {
    this.route.navigate([""]);
  }
  navigateToLogin() {
    this.route.navigate(['login']);
  }
  navigateToRegister(){
    this.route.navigate(['register']);
  }
}
