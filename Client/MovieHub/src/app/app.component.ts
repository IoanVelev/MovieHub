import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieHub';

  constructor(private service: SharedService){}

  movies: any = [];

  refreshMovies(){
    this.service.getMovies().subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    });
  }
  
  ngOnInit(): void {
    this.refreshMovies();
  }

  addMovie(name: string, year: string, genre: string){
    this.service.addMovie(name, year, genre);
  }


  deleteMovie(id: string){
    this.service.deleteMovie(id);
  }

}
