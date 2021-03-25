import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Quotes initial array
  quotes:Quote[] = [
        new Quote('Do what you can, with what you have, where you are.','Theodore Roosevelt','Thumi',new Date(2020,6,1)),
        new Quote('Dont let yesterday take up too much of today.','Will Rogers','Thumi',new Date(2019,6,1))
  ]


  //display/hide quote details
  toggleDetails(index:number){
       this.quotes[index].moreDetails = !this.quotes[index].moreDetails;
  }

  //upvoting
  upvote(index:number){
      this.quotes[index].vote += 1;
      console.log(this.quotes[index].vote)
  }

  //downvoting
  downvote(index:number){
      this.quotes[index].vote -= 1;
  }

  //add quote
  addQuote(quote:Quote){
      
      this.quotes.push(quote);
  }
}
