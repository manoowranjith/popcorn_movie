import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponentComponent
  },
  {
    path: "movie/:id",
    component: MyMovieComponentComponent
  },
  { 
    path: '',   
    redirectTo: '/home', 
    pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
