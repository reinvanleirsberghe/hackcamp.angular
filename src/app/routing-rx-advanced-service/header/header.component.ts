import {Component, Input} from '@angular/core';

@Component({
  selector: 'hf-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() logo = '';
}
