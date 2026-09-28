import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { login } from '../data/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  errorMessage = '';

  constructor(private router: Router) {}

  logIn() {

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    const success = login(this.email, this.password);

    if (!success) {
      this.errorMessage = 'Invalid email or password.';
      return;
    }

    this.router.navigate(['/jobs']);
  }

}
