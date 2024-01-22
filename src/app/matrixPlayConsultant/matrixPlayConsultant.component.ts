import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'matrix-playconsultant',
  templateUrl: './matrixPlayConsultant.component.html',
  styleUrls: [ './matrixPlayConsultant.component.css' ]
})
export class PlayConsultantComponent  {
 //readmore variable, its true than read more string will print
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  
  efalgus: any;
  laalgus: any;
  makalgus: any;
  realgus: any;
  bialgus: any;
  textkokku: any;
  pdftext: any;

  lantau() {
  
    this.efalgus = localStorage.getItem("efektalgus");
    this.laalgus = localStorage.getItem("laenalgus");
    this.makalgus = localStorage.getItem("maksevoimalgus");
    this.realgus = localStorage.getItem("rentaablusalgus");
    this.bialgus = localStorage.getItem("struktuuralgus");
    this.textkokku = this.efalgus + " " + this.laalgus + " " + this.makalgus + " " + this.realgus + " " + this.bialgus;
    this.pdftext = this.textkokku;
    localStorage.setItem("pdftext", this.pdftext);
    return this.textkokku;
  //localStorage.setItem("laenalgus", this.koond);
  //this.robotrnt = localStorage.getItem("rentaablus");

  }

}