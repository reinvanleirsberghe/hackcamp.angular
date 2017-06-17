import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieHoverInfoComponent} from './movie-hover-info.component';

describe('MovieHoverInfoComponent', () => {
  let component: MovieHoverInfoComponent;
  let fixture: ComponentFixture<MovieHoverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieHoverInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHoverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
