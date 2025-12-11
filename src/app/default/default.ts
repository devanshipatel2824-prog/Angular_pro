import { Component,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.html',
  styleUrls: ['./default.css']
})
export class Default {
//constructor (private router:Router){}
protected readonly router = inject (Router);
gotohome()
{
  this.router.navigate(['homepage'])
}
}
