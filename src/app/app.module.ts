import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { MovieGenreListComponent } from './feature/movie-genre/movie-genre-list/movie-genre-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    UserListComponent,
    GenreListComponent,
    MovieGenreListComponent,
    MenuComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorCreateComponent,
    ActorEditComponent,
    ActorDetailComponent,
    CreditDetailComponent,
    CreditEditComponent,
    CreditCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
