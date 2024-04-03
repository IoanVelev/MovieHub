import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { AuthActivate } from "../guards/auth.activate";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";


const routes: Routes = [{ path: 'movie/create', component: AddMovieComponent, canActivate: [AuthActivate]},
{ path: 'movies/:movieId', component: MovieDetailsComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {

}