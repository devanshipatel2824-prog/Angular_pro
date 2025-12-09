import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Homepage,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
/*template:`<h1>Hello World</h1> <h1>Hii Hello</h1>`,

styles:
'h1{ color:red;}'*/
})
export class App {
  protected readonly title = signal('Angular_project');
}
