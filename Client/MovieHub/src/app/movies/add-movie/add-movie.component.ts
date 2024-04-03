import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{
  fb = inject(FormBuilder);
  router = inject(Router);
  movieService = inject(SharedService);
  authService = inject(AuthService);

  userId: string = '';

  ngOnInit(): void {
    this.authService.user$.subscribe(res => {
      this.userId = res!.uid;
    });
  }


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
    this.movieService.addMovie(name!, genre!, year!, description!, imageUrl!, this.userId!);

    this.router.navigate(['/home']);
  }
}
