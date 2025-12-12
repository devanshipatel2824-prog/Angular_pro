import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
 protected name="Devanshi";
protected imageurl="/images/avatar.png";
protected username?:string;
protected studentname=signal("Devanshi patel");



}
