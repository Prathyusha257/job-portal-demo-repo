import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { login } from '../data/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  email = '';
  password = '';

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['registered'] === 'true') {
        this.successMessage = 'Registration successful! Please log in to access the portal.';
        this.router.navigate([], { relativeTo: this.route, queryParams: {} });
      }
    });
  }

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
