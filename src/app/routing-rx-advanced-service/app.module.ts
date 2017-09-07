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
import {HttpModule} from '@angular/http';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from './di';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {StatsComponent} from './stats/stats.component';
import {HttpClientModule} from '@angular/common/http';

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
    MovieDetailsComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthService,
    ServerUrl,
    PictureCdnUrl,
    BackdropUrl,
    BackdropUrl780,
    PictureOriginalUrl,
    Categories,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
