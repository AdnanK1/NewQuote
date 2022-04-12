import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  newQuote: User [ ] = [ ]  
  
  newUser(quote:any){
    quote.firstName = quote.firstName
    quote.lastName = quote.lastName
    quote.quote = quote.quote
    quote.authorName = quote.authorName
    this.newQuote.push(quote);
  }
  addNewQuotes(quote: any) {
    let goalLength = this.newQuote.length;
    quote.id = goalLength + 1;
    this.newQuote.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
