import { Component, OnInit } from '@angular/core';
import { RandomQuoteService } from './culture.service';
import { SpeechService } from './culture2.service';

@Component({
  selector: 'matrix-culture',
  templateUrl: './matrixCulture.component.html',
  styleUrls: ['./matrixCulture.component.css']
})
export class CultureComponent implements OnInit {
  quote$ = this.quoteService.quote$;
tweetUrl = 'https://twitter.com/intent/tweet?text=';

  // speechSynthesis = window.speechSynthesis;
  // voices = speechSynthesis.getVoices();

  constructor(private quoteService: RandomQuoteService, private speechService: SpeechService) { }

  ngOnInit() {
    this.quoteService.getQuotes();    
  }

  getRandomQuote() {
    this.quoteService.getRandomQuote();
    this.speechService.cancel()
  }

  speak(quote) {
    this.speechService.speak(`${quote.quote} by ${quote.author}`);
  }
}