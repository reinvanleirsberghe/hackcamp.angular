import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieComponent} from './movie-list/movie/movie.component';
import {MovieHoverInfoComponent} from './movie-list/movie/movie-hover-info/movie-hover-info.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ShortenPipe} from './shorten.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {ApiService} from './api.service';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {EmailValidatorDirective} from './validators/email-validator.directive';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {StatsComponent} from './stats/stats.component';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {AuthService} from './auth.service';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from './di';
import {AuthGuard} from './auth.guard';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        FormsModule,
        AppRoutingModule
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
        AuthGuard,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as logo 'app'`, async(() => {
    expect(component.logo).toEqual('../assets/images/logo.svg');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flix');
  }));

});
