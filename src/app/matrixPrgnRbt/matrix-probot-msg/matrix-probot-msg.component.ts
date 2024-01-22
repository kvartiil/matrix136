import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matrix-probot-msg',
  templateUrl: './matrix-probot-msg.component.html',
  styleUrls: ['./matrix-probot-msg.component.css'],
})
export class PPrgnRbtComponent implements OnInit {
  @Input() message;

  @Output() eventOptionSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendOption(opcion: string) {
    this.eventOptionSelected.emit(opcion);
    setTimeout(() => {
      this.message.options = [];
    }, 500);
  }

  getClasses() {
    if (this.message.autor == 'bot') {
      return 'd-flex flex-row justify-content-start chat-bot';
    }
    return 'd-flex flex-row justify-content-end chat-user';
  }
}