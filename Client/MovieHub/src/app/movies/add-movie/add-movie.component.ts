import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    genre: ['', [Validators.required, Validators.minLength(5)]],
    year: ['', [Validators.required, Validators.min(1950), Validators.max(2029)]],
    description: ['', [Validators.required, Validators.minLength(15)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]]
  });

  addMovie(): void {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }
  }
}
