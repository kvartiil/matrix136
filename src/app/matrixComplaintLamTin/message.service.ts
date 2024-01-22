import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = [];

  addMessage(message) {
    this.message.push(message);
  }

  clearMessage() {
    this.message = [];
  }
}