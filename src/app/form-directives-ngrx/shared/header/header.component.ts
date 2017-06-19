import {Component, Input} from '@angular/core';

@Component({
  selector: 'hf-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../assets/css/header.css']
})
export class HeaderComponent {
  @Input()
  logo = '';
}
