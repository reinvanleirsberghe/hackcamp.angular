import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieComponent} from './movie-list/movie/movie.component';
import {MovieHoverInfoComponent} from './movie-list/movie/movie-hover-info/movie-hover-info.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ApiService} from './api.service';
import {ShortenPipe} from './shorten.pipe';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {EmailValidatorDirective} from './validators/email-validator.directive';
import {TitleCaseValidatorDirective} from './validators/title-case-validator.directive';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    MovieHoverInfoComponent,
    HeaderComponent,
    SidebarComponent,
    MenubarComponent,
    ShortenPipe,
    HomeComponent,
    LoginComponent,
    EmailValidatorDirective,
    TitleCaseValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
