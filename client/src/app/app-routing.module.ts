import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent} from './component/profile/register/register.component';
import {BecomeAhostComponent} from './component/become-ahost/become-ahost.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'register', component: RegisterComponent},
  { path:'profile', component: ProfileComponent},
  { path:'becomeAhost', component: BecomeAhostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }