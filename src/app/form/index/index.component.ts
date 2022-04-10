import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user: any;
  addNewUser(_user: any){
    let goalLength = this.user.length;
    User.id = goalLength+1;
    this.user.push(User)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
