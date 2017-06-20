import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {MovieComponent} from './movie/movie.component';
import {MovieHoverInfoComponent} from './movie/movie-hover-info/movie-hover-info.component';
import {ShortenPipe} from '../../shared/pipes/shorten.pipe';
import {RouterModule} from '@angular/router';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [
        MovieListComponent,
        MovieComponent,
        MovieHoverInfoComponent,
        ShortenPipe,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});