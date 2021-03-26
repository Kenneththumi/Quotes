import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote:Quote;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newQuote = new EventEmitter<Quote>()

  onSubmit(f:NgForm){
      //new quote instance on submitting
      this.quote= new Quote('','','',new Date());

      this.quote.quote = f.form.value.quote;
      this.quote.author = f.form.value.author;
      this.quote.user = f.form.value.user;
      this.quote.dateSubmission = new Date(f.form.value.date);

      this.newQuote.emit(this.quote);

      //reset form on submit
      f.form.reset();
  }
}
