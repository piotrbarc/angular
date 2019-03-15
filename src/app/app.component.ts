import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filmy = [
    'Shrek',
    'Scary Movie',
    'Oszukac przeznaczenie',
    'Star Trek',
    'Green book'
  ];
}
