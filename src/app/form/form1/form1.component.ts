import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  newUser = new User("","","","");
  @Output() addUser = new EventEmitter<User>();
  onSubmit(){
 
}
  constructor() { }

  ngOnInit(): void {
  }

}
