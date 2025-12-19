import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChidComponet } from './chid-componet/chid-componet';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule,ChidComponet],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
//  protected names="Devanshi";
// protected imageurl="/images/avatar.png";
// protected username?:string;
// protected studentname=signal("Devanshi patel");

  
//  nameInput = '';
//   emailInput = '';
//   passwordInput = '';
//   addressInput = '';

//   users: any[] = [];

//   editingIndex: number | null = null;
//   studentlist: { sname: string; age: number; }[];

//   add() {
//     if (this.editingIndex !== null) {
     
//       this.users[this.editingIndex] = {
//         name: this.nameInput,
//         email: this.emailInput,
//         password: this.passwordInput,
//         address: this.addressInput
//       };
//       this.editingIndex = null;
//     } else {
     
//       this.users.push({
//         name: this.nameInput,
//         email: this.emailInput,
//         password: this.passwordInput,
//         address: this.addressInput
//       });
//     }
//     this.nameInput = '';
//     this.emailInput = '';
//     this.passwordInput = '';
//     this.addressInput = '';
//   }

//   delete(index: number) {
//     this.users.splice(index, 1);
  
//     if (this.editingIndex === index) {
//       this.editingIndex = null;
//       this.nameInput = '';
//       this.emailInput = '';
//       this.passwordInput = '';
//       this.addressInput = '';
//     }
//   }

//   edit(index: number) {
//     this.nameInput = this.users[index].name;
//     this.emailInput = this.users[index].email;
//     this.passwordInput = this.users[index].password;
//     this.addressInput = this.users[index].address;
//     this.editingIndex = index; 
//   }
// constructor(){
//   this.studentlist=[
//     {sname:"Devanshi",age:20},
//     {sname:"Dhyey",age:18}
// ]
// console.log("Student Data");
// console.log(this.studentlist);
// }

 
// ngOnInit()
// {
//   console.log("To initialize");
// }
// ngDoCheck()
// {
//   console.log("It check the value in every time");
//   console.log(this.studentlist);
// }
showForm = false;
  contacts: any[] = [];

  openForm() {
    this.showForm = true;
  }

  addContactToParent(contact: any) {
    this.contacts.push(contact);
    this.showForm = false; // form close
  }
}
