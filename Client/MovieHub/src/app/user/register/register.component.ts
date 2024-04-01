import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email.validator';
import { matchPasswords } from 'src/app/shared/utils/passwords.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  domains = EMAIL_DOMAINS;

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group({ password: ['', [Validators.required, Validators.minLength(5)]], rePassword: ['', [Validators.required]] }, {
      validators: [matchPasswords('password', 'rePassword')]
    }),
  })


  constructor(private fb: FormBuilder, private router: Router) {}

  register(): void {
    
    
    if (this.form.invalid) {
      console.log('INVALID FORM');

      return;
    }

    this.router.navigate(['/login']);
    
  }
}
