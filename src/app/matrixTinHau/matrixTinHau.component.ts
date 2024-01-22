import { Component } from '@angular/core';

@Component({
  selector: 'matrix-tinhau',
  templateUrl: './matrixTinHau.component.html',
  styleUrls: ['./matrixTinHau.component.css']
})
export class TinHauComponent  {
  first = 'and this is editable input';
  second = 'input';
  third = 'Editable ticket title';
  fourth = 'text paragraph';
  fifth = 'bold sections';
  sixth = 'Kirjuta siia mulli sisse...';
  
  ReadMore:boolean = true
    visible:boolean = false
    onclick()
    {
      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    }


  tryki () {

    console.log(this.fifth);
    console.log(this.sixth);
    localStorage.setItem("ylesanne", this.sixth);
  
  }


}