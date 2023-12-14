import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '',redirectTo :'registration',pathMatch : 'full'},
  {path : 'registration',component : RegistrationComponent},
  {path : 'login',component : LoginComponent},
  {path : 'home',component : HomeComponent},
  {path : 'users', component : UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
