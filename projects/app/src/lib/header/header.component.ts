import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Input()
  user: unknown = null;

  @Output()
  login = new EventEmitter<Event>();

  @Output()
  logout = new EventEmitter<Event>();

  @Output()
  createAccount = new EventEmitter<Event>();
}
