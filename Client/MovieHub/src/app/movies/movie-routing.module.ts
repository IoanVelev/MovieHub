import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { AuthActivate } from "../guards/auth.activate";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { HomeComponent } from "../home/home.component";


const routes: Routes = [{ path: 'movie/create', component: AddMovieComponent, canActivate: [AuthActivate]},
{ path: 'movies/:movieId', component: MovieDetailsComponent },
{ path: 'movie/edit/:movieId', component: MovieEditComponent, canActivate: [AuthActivate] },
{ path: 'movie/delete/:movieId', component: HomeComponent, canActivate: [AuthActivate]}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {

}