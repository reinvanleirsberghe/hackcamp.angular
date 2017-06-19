import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../../shared/types';

@Component({
  selector: 'hf-movie-hover-info',
  templateUrl: './movie-hover-info.component.html',
  styleUrls: ['./movie-hover-info.component.css'],
})
export class MovieHoverInfoComponent implements OnInit {
  @Input()
  isContainerHovered = false;

  @Input()
  movie: Movie = new Movie();

  constructor() {
  }

  ngOnInit() {
  }
}
