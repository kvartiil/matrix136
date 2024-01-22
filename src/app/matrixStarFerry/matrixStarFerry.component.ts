import { Component } from '@angular/core';

@Component({
  selector: 'matrix-starferry',
  templateUrl: './matrixStarFerry.component.html',
  styleUrls: ['./matrixStarFerry.component.css']
})
export class StarFerryComponent {
  
  ReadMore:boolean = true
  visible:boolean = false
  public isVisible: boolean = false;
  time = 6000;


  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    this.time = parseFloat(localStorage.getItem("kasutus"));
    //this.time = localStorage.getItem("pdftext");
    //this.lahtemudel = parseFloat(this.modelStruct)*100;

    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,this.time);


  }


  public stars: boolean[] = Array(10).fill(false);

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }
}