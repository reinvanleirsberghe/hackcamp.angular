import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieComponent} from './movie-list/movie/movie.component';
import {MovieHoverInfoComponent} from './movie-list/movie/movie-hover-info/movie-hover-info.component';
import {HeaderComponent} from '../shared/header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ShortenPipe} from '../shared/pipes/shorten.pipe';
import {ApiService} from '../core/api.service';
import {AuthService} from '../core/auth.service';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from '../di';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from '../app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from '../auth/login/login.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {StatsComponent} from './stats/stats.component';
import {APP_BASE_HREF} from '@angular/common';
import {CoreModule} from '../core/core.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
      ],
      declarations: [
        HomeComponent,
        MovieListComponent,
        MovieComponent,
        MovieHoverInfoComponent,
        HeaderComponent,
        SidebarComponent,
        MenubarComponent,
        ShortenPipe,
        LoginComponent,
        StatsComponent,
        MovieDetailsComponent
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
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
