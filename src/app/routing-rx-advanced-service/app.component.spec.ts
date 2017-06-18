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
import {PICTURES_CDN_URL} from '../shared/constant';

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
      ],
      imports: [
        BrowserModule
      ],
      providers: [ApiService],
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

  it(`should have as PICTURES_CDN_URL 'app'`, async(() => {
    expect(component.PICTURES_CDN_URL).toEqual(PICTURES_CDN_URL);
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flix');
  }));

  it('should have a list of 50 movies', async(() => {
    expect(component.movies.length).toEqual(50);
  }));

  it('should render a list of movies', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.movie').length).toEqual(50);
  }));

  it('should have "All" category selected by default', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const tab = compiled.querySelector('.tab-filter > ul > li > a.selected ');

    expect(tab.textContent).toEqual('All');
  }));

  it('should select the category tab when click on it', async(() => {
    const compiled = fixture.debugElement.nativeElement;

    const tabs = compiled.querySelectorAll('.tab-filter > ul > li > a');
    const selectedTab = tabs[3];

    selectedTab.click();
    fixture.detectChanges();

    expect(selectedTab.className).toEqual('selected');
  }));
});
