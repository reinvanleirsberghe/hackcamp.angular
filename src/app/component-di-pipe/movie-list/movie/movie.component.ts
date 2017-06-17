import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../shared/types';

@Component({
  selector: 'hf-movie',
  templateUrl: './movie.component.html',
  styleUrls:  [
    '../../../../assets/css/movie.css',
  ]
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie;

  @Input()
  baseUrlCDN;

  isHovered = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleHoverForTheMovie(): void {
    this.isHovered = !this.isHovered;
  }

}
