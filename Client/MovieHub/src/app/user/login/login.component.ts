import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage: string | null = null;

  login(form: NgForm): void {
    if (form.invalid) {
      return
    }
    
   this.authService.login(form.value.email, form.value.password)
   .subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
    error: (err) => {
      this.errorMessage = err.code;
    }
   });
  }
}
