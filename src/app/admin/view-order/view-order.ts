import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-order',
  imports: [],
  templateUrl: './view-order.html',
  styleUrl: './view-order.css',
})
export class ViewOrder {
 usernameValue = "";
  passwordValue = "";
  message = "";

  login(u: any, p: any) {
    this.usernameValue = u.value;
    this.passwordValue = p.value;

    if (this.usernameValue === "admin" && this.passwordValue === "1234") {
      this.message = "Login Successful!";
    } else {
      this.message = "Invalid Username or Password";
    }
  }
}
