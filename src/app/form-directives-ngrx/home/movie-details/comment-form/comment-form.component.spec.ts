import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentFormComponent} from './comment-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpModule],
      declarations: [CommentFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
