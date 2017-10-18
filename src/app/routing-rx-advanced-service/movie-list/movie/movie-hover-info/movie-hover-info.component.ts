import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../shared/types';

@Component({
  selector: 'hf-movie-hover-info',
  templateUrl: './movie-hover-info.component.html',
})
export class MovieHoverInfoComponent {
  @Input() isContainerHovered: boolean = false;

  @Input() movie: Movie = new Movie();
}
