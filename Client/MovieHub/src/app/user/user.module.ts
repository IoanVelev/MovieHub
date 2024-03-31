import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
