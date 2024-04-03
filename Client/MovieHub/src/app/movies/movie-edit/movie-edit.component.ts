import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  movieService = inject(SharedService);



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

    const { name, genre, year, description, imageUrl } = this.form.value;
    this.movieService.addMovie(name!, genre!, year!, description!, imageUrl!);

    this.router.navigate(['/home']);
  }
}
