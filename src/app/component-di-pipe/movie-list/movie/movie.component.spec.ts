import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieComponent} from './movie.component';
import {MovieHoverInfoComponent} from './movie-hover-info/movie-hover-info.component';
import {ShortenPipe} from '../../shorten.pipe';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieComponent,
        MovieHoverInfoComponent,
        ShortenPipe,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
