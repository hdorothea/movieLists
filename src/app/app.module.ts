import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { MovieListBarComponent } from './movie-list-bar/movie-list-bar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MovieListTitleInputComponent } from './movie-list-title-input/movie-list-title-input.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListTitleElementComponent } from './movie-list-title-element/movie-list-title-element.component';

import { MovieListsService, CurrentMovieListService} from './movie-lists.service';
import { TMDBMovieService, TMDBBaseService, TMDBSearchService, TMDBPersonService } from './tmdb.service';
import { AutoFocusDirective } from './auto-focus.directive';
import { MovieComponent } from './movie/movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BarViewComponent } from './bar-view/bar-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MovieListTitleComponent } from './movie-list-title/movie-list-title.component';
import { MovieListBarImageElementComponent } from './movie-list-bar-image-element/movie-list-bar-image-element.component';
import { ReadonlyMovieListComponent } from './readonly-movie-list/readonly-movie-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [{path: 'signup', component: SignupComponent},
                           {path: ':movielistid', component: ListViewComponent},
                           {path: 'detail/:movieid', component: MovieDetailComponent},
                           {path: ':title/:id/movies', component: ReadonlyMovieListComponent}];

@NgModule({
  declarations: [
    AppComponent,
    MovieListBarComponent,
    MovieListTitleInputComponent,
    MovieListTitleElementComponent,
    MovieListComponent,
    AutoFocusDirective,
    MovieComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    BarViewComponent,
    ListViewComponent,
    MovieListTitleComponent,
    MovieListBarImageElementComponent,
    ReadonlyMovieListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [MovieListsService, CurrentMovieListService, TMDBMovieService, TMDBBaseService, TMDBSearchService, TMDBPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
