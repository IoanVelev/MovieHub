import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [ {path: '', pathMatch: 'full', redirectTo: '/home'},
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent},
{ path: '**', redirectTo: '/404' },
{ path: '404', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
