import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  //styleUrl: './app.css'
template:`<h1>Hello World</h1>`,

styles:
'h1{ color:red;}'
})
export class App {
  protected readonly title = signal('Angular_project');
}
