import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from 'src/guard/auth.guard';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { RoadmapDetailComponent } from './roadmap/roadmap-detail.component';
import {CursosComponent} from "./cursos/cursos.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'roadmaps',
    component: RoadmapComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
