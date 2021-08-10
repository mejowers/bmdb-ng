import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { MovieGenreListComponent } from './feature/movie-genre/movie-genre-list/movie-genre-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';

const routes: Routes = [
  { path:'', redirectTo: '/movie-list', pathMatch:'full'},
  { path:'movie-list', component:MovieListComponent},
  { path:'movie-create', component:MovieCreateComponent},
  { path:'movie-detail/:id', component:MovieDetailComponent},
  { path:'movie-edit/:id', component:MovieEditComponent},
  { path:'actor-list', component:ActorListComponent},
  { path:'actor-create', component:ActorCreateComponent},
  { path:'actor-detail/:id', component:ActorDetailComponent},
  { path:'actor-edit/:id', component:ActorEditComponent},
  { path:'credit-list', component:CreditListComponent},
  { path:'credit-create', component:CreditCreateComponent},
  { path:'credit-detail/:id', component:CreditDetailComponent},
  { path:'credit-edit/:id', component:CreditEditComponent},
  { path:'genre-list', component:GenreListComponent},
  { path:'user-list', component:UserListComponent},
  { path:'movie-genre-list', component:MovieGenreListComponent},
  { path: '**', component:MovieListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
