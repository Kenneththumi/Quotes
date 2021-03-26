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
      this.quotes[index].upvote += 1;
  }

  //downvoting
  downvote(index:number){
      this.quotes[index].downvote += 1;
  }

  //add quote
  addQuote(quote:Quote){
      
      this.quotes.push(quote);
  }

  //delete quote
  deleteQuote(index:number){
        if( confirm('Confirm quote delete?') ){
              this.quotes.splice(index,1);
        } 
  }

 
  //return a boolean whether the quote has the highest upvote
  isHighestUpvote(index:number){
         //create an array of upvotes from quotes array
         let upvotes:number[]=[];
         
         for(let i=0; i<this.quotes.length; i++){
                upvotes.push(this.quotes[i].upvote);
         }

         //get largest/max upvote from the upvotes array
         let max = Math.max(...upvotes);
         
         //if no votes , i.e when zero upvotes, return false 
         if(max==0){
             return false;
         }

         //if the current item vote equal max vote return true
         if(this.quotes[index].upvote == max){
              return true
         }

         //any other sitation
         return false;
  }
}
