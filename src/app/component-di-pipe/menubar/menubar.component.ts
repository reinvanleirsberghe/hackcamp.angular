import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/types';

@Component({
  selector: 'hf-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input()
  categories: Category[];

  @Input()
  counter: Number;

  @Input()
  selectTab: (category: string) => void;

  constructor() {
  }

  ngOnInit() {
  }

}
