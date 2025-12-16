import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { Router } from 'express';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
