import {Component, Input, OnInit} from '@angular/core';
import {MovieLite} from '../../type';

@Component({
  selector: 'hf-movie',
  templateUrl: './movie.component.html',
  styleUrls: [
    '../../../../assets/css/movie.css',
  ]
})
export class MovieComponent {

  @Input() movie: MovieLite = new MovieLite();

  isHovered = false;

  toggleHoverForTheMovie(): void {
    this.isHovered = !this.isHovered;
  }
}
