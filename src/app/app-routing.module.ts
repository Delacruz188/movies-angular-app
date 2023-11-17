import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailsComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
