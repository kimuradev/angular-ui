import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  /**
   * Input contents
   *
   * @required
   */
  @Input()
  value = 'Input';

  constructor() {}

  ngOnInit(): void {}
}
