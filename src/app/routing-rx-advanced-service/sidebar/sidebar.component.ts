import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'hf-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  @Output() closeSideBar: EventEmitter<void> = new EventEmitter<void>();

  @Output() openSideBar: EventEmitter<void> = new EventEmitter<void>();

  @Input() navClosed: Boolean;

  onCloseSideBar(): void {
    this.closeSideBar.emit();
  }

  onOpenSideBar(): void {
    this.openSideBar.emit();
  }

  onSearch(event: KeyboardEvent): void {
    this.search.emit((<HTMLInputElement>event.target).value);
  }
}
