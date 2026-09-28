import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { createAccount as registerAccount, accountExists } from '../data/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';

  constructor(private router: Router) {}

  createAccount() {

    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (accountExists(this.email)) {
      this.errorMessage = 'An account with this email already exists. Please log in instead.';
      return;
    }

    registerAccount({
      name: this.fullName.trim(),
      email: this.email.trim(),
      password: this.password
    });

    this.router.navigate(['/login']);
  }

}
