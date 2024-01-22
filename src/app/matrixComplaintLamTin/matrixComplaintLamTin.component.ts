import { Component, ViewChild, ElementRef } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'matrix-complaintlamtin',
  templateUrl: './matrixComplaintLamTin.component.html',
  styleUrls: [ './matrixComplaintLamTin.component.css' ]
})
export class ComplaintLamTinComponent  {

  values;

  @ViewChild('ref', {static: false}) inputElement: ElementRef;

  constructor(private messageService: MessageService) {}

  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    this.inputElement.nativeElement.focus();
  }

  //Using NgModel Method

  // add() {
  //   this.messageService.addMessage(this.values);
  //   this.values = '';
  //   this.focus();
  // }

  //   clear() {
  //   this.values = '';
  //   this.focus();
  // }


  //Using ViewChild Method

  add() {
    this.values = this.inputElement.nativeElement.value;
    if(this.values) {
      this.messageService.addMessage(this.values);
    }
    this.inputElement.nativeElement.value = '';
    this.focus();
  }

  clear() {
    this.inputElement.nativeElement.value = '';
    this.focus();
  }

  empty() {
    this.messageService.clearMessage();
  }
}
