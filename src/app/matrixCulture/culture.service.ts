import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError, BehaviorSubject, Subject } from "rxjs";
import { shareReplay, catchError, take } from "rxjs/operators";
import { Quote } from "./quote";

@Injectable({
  providedIn: "root"
})
export class RandomQuoteService {
  url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  quotes$ = this.http
    .get<{quotes: Quote[]}>(this.url)
    .pipe(
      shareReplay(1),
      take(1),
      catchError(this.handleError)
    );
  
  quotes = [];
  max = 0;
  quoteSubject = new Subject<Quote>();
  quote$ = this.quoteSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuotes() {
    this.quotes$.subscribe(response => {
      this.quotes = response.quotes;
      this.max = this.quotes.length - 1;
      this.quoteSubject.next(this.quotes[0]);
    })
  }

  getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * (this.max + 1) );
    this.quoteSubject.next(this.quotes[randomNumber]);
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
