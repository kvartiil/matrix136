import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'matrix-playconsultant2',
  templateUrl: './matrixPlayConsultant2.component.html',
  styleUrls: [ './matrixPlayConsultant2.component.css' ]
})
export class PlayConsultant2Component  {
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
  
  juhtlong: any;
  
  lantau() {
  
    this.juhtlong = localStorage.getItem("ylesanne");
    return this.juhtlong;
  //localStorage.setItem("laenalgus", this.koond);
  //this.robotrnt = localStorage.getItem("rentaablus");

  }

}