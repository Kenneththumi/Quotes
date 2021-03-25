import { Component, OnInit } from '@angular/core';
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

  quotes:Quote[] = [
        new Quote('Do what you can, with what you have, where you are.','Theodore Roosevelt','Thumi',new Date(2020,6,1)),
        new Quote('Dont let yesterday take up too much of today.','Will Rogers','Thumi',new Date(2019,6,1))
  ]


  //display/hide quote details
  toggleDetails(index:number){
       this.quotes[index].moreDetails = !this.quotes[index].moreDetails;
  }
}
