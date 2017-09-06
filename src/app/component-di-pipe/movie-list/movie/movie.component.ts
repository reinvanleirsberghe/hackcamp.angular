import {Component, Input, OnInit} from '@angular/core';
import {MovieLite} from '../../type';

@Component({
  selector: 'hf-movie',
  templateUrl: './movie.component.html',
  styleUrls: []
})
export class MovieComponent implements OnInit {

  @Input()
  movie: MovieLite = new MovieLite();

  isHovered = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleHoverForTheMovie(): void {
    this.isHovered = !this.isHovered;
  }

}
