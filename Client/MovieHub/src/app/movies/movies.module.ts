import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    MovieListComponent,
    AddMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MovieListComponent, AddMovieComponent, MovieDetailsComponent]
})
export class MoviesModule { }
