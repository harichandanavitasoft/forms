import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { IndexComponent } from './index/index.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path : '',redirectTo :'index',pathMatch : 'full'},
  {path : 'index',component :IndexComponent},
   {path : 'login',component : LoginComponent},
  {path : 'users', component : UsersComponent},
  { path :'admin' , component : AdminDashboardComponent ,children:[
    {path : 'registration',component : RegistrationComponent},
    {path : 'home',component : HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
