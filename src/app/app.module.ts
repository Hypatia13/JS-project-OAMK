import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailsComponent,
    MovieListComponent,
    LoginComponent,
    AdminComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    HowItWorksComponent,
    JumbotronComponent,
    MoviesComponent,
    NavbarComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
