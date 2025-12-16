import { Component, inject } from '@angular/core';
import { Router } from 'express';
import { RouterOutlet } from "../../../node_modules/@angular/router/types/_router_module-chunk";


@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
protected readonly router=inject(Router);
gotohome()
{
  this.router.navigate(['home']);      
}
}