import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { LioliComponent } from './lioli/lioli.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { NewListTitleComponent } from './new-list-title/new-list-title.component';
import { ListComponent } from './list/list.component';
import { LioliElementComponent } from './lioli-element/lioli-element.component';

import { ListsService} from './lists.service';
import { CurrentListService} from './current-list.service';
import { MovieService } from './movie.service';
import { AutoFocusDirective } from './auto-focus.directive';
import { MovieComponent } from './movie/movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { LioliContainerComponent } from './lioli-container/lioli-container.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListTitleComponent } from './list-title/list-title.component';
import { CollageComponent } from './collage/collage.component';
import { ReadonlyListComponent } from './readonly-list/readonly-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ToggleLoginButtonComponent } from './toggle-login-button/toggle-login-button.component';
import { ListElementComponent } from './list-element/list-element.component';
import { MovieDetailViewComponent } from './movie-detail-view/movie-detail-view.component';
import { DirectorLinkComponent } from './director-link/director-link.component';
import { DirectorListComponent } from './director-list/director-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ToggleLioliButtonComponent } from './toggle-lioli-button/toggle-lioli-button.component';
import { ViewComponent } from './view/view.component';
import { FormErrorBannerComponent } from './form-error-banner/form-error-banner.component';
import { HomeListComponent } from './home-list/home-list.component';

const appRoutes: Routes = [{path: 'signup', component: SignupComponent},
                           {path: 'detail/:movieid', component: MovieDetailComponent},
                           {path: 'directorlist/:directorname/:directorid', component: DirectorListComponent},
                           {path: 'list/:listid', component: ListContainerComponent},
                           {path: '**', pathMatch: 'full', component: HomeListComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LioliComponent,
    NewListTitleComponent,
    LioliElementComponent,
    ListComponent,
    AutoFocusDirective,
    MovieComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    LioliContainerComponent,
    ListContainerComponent,
    ListTitleComponent,
    CollageComponent,
    ReadonlyListComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ToggleLoginButtonComponent,
    ListElementComponent,
    MovieDetailViewComponent,
    DirectorLinkComponent,
    DirectorListComponent,
    ListViewComponent,
    ToggleLioliButtonComponent,
    ViewComponent,
    ViewComponent,
    FormErrorBannerComponent,
    HomeListComponent
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
  providers: [ListsService, CurrentListService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
