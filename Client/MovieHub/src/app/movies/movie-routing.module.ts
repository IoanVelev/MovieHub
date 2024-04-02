import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { AuthActivate } from "../guards/auth.activate";


const routes: Routes = [{ path: 'movie/create', component: AddMovieComponent, canActivate: [AuthActivate]}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule {

}