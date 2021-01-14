import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-app',
  template: `
    <p>
      app works!
    </p>
  `,
  styles: [
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
