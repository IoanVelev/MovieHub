import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieListComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [MovieListComponent]
})
export class MoviesModule { }
