import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent} from './component/register/register.component';
import {BecomeAhostComponent} from './component/become-ahost/become-ahost.component'
import {LoginComponent} from './component/login/login.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'profile', component: ProfileComponent},
  { path:'becomeAhost', component: BecomeAhostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }