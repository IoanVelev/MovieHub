import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  movieService = inject(SharedService);
  param: string = '';
  movieName: string = '';
  genre: string = '';
  year: string = '';
  description: string = '';
  imageUrl: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((urlParam) => {
      this.param = urlParam['movieId'];
    });
    this.movieService.getMovieById(this.param).subscribe((res) => {
      this.movieName = res.data()?.['name'];
      this.genre = res.data()?.['genre'];
      this.year = res.data()?.['year'];
      this.description = res.data()?.['description'];
      this.imageUrl = res.data()?.['imageUrl'];
    });
  }

  print(): void {}
}
