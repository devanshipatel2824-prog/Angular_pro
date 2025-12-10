import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
constructor (private router:Router){}
gotohome()
{
  this.router.navigate(['homepage']);
}
}
