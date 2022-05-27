import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-start';

  toggle = true

  cards:Card[] = [
    { title: 'iPhone', text: 'Iphone 12 pro' },
    { title: 'Samsung', text: 'Samsung Galaxy S20' },
    { title: 'Xiaomi', text: 'Xiaomi Note 8 Pro' }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
