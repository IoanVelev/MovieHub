import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
})
export class MovieEditComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  movieService = inject(SharedService);
  route = inject(ActivatedRoute);
  name: string = '';
  genre: string = '';
  year: string = '';
  description: string = '';
  imageUrl: string = '';
  param: string = '';


  ngOnInit(): void {
    this.route.params.subscribe((urlParam) => {
      this.param = urlParam['movieId'];
    });
    this.movieService.getMovieById(this.param).subscribe((res) => {
      this.name = res.data()?.['name'];
      this.genre =  res.data()?.['genre'];
      this.year =  res.data()?.['year'];
      this.description = res.data()?.['description'];
      this.imageUrl =  res.data()?.['imageUrl'];
    });
    
    
  }

  form = this.fb.group({
    name: [this.name, [Validators.required, Validators.minLength(2)]],
    genre: [this.genre, [Validators.required, Validators.minLength(5)]],
    year: [
      this.year,
      [Validators.required, Validators.min(1950), Validators.max(2029)],
    ],
    description: [this.description, [Validators.required, Validators.minLength(15)]],
    imageUrl: [this.imageUrl, [Validators.required, Validators.pattern(/^https?:\/\//)]],
  });

  editMovie(): void {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    const { name, genre, year, description, imageUrl } = this.form.value;
    this.movieService.editMovie(name!, genre!, year!, description!, imageUrl!, this.param!);

    this.router.navigate(['/home']);
  }
}
