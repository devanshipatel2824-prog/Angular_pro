import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chid-componet',
  imports: [FormsModule],
  templateUrl: './chid-componet.html',
  styleUrl: './chid-componet.css',
})
export class ChidComponet {
name = '';
      phone = '';
      email = '';

  @Output() contactAdded = new EventEmitter<any>();

  addContact() {
    const contact = {
      name: this.name,
      phone: this.phone,
      email: this.email
    };

    this.contactAdded.emit(contact);

    // form reset
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}
