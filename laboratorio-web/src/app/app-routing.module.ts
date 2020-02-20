import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './start/login/login.component';
import {SignupComponent} from './start/signup/signup.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'projects', component: ProjectListComponent, canActivate: [CanActivateRouteGuard] },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
