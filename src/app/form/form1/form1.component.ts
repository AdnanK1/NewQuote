import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
userModel = new User()
  constructor() { }

  ngOnInit(): void {
  }

}
