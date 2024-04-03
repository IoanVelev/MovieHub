import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  title = 'MovieHub';

  constructor(private service: SharedService){}

  movies: any = [];

  refreshMovies(){
    this.service.getMovies().subscribe(res => {
      this.movies = res;
      //console.log(this.movies);
    });
  }
  
  ngOnInit(): void {
    this.refreshMovies();
  }

  // addMovie(name: string, year: string, genre: string, description: string, imageUrl: string){
  //   this.service.addMovie(name, year, genre, description, imageUrl);
  // }


  // deleteMovie(id: string){
  //   this.service.deleteMovie(id);
  // }
}
