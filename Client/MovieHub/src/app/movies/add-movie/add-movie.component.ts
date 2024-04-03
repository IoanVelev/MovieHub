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
    name: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    year: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  addMovie(): void {
    if (this.form.invalid) {
      console.log('INVALID FORM');

      return;
    }
  }
}
