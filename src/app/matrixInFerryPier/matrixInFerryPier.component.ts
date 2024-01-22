import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-ferrypier',
  templateUrl: './matrixInFerryPier.component.html',
  styleUrls: ['./matrixInFerryPier.component.scss']
})
export class FerryPierComponent implements OnInit {


  

  constructor() { //Siin toob sisse
    
    }

    ngOnInit() {  
      
  } 

  myProperty = true;
  ferry: any;
  
  myProperty2() {
  this.ferry = JSON.stringify(this.myProperty);
  localStorage.setItem("ferrypier", this.ferry);


  //localStorage.setItem('test', JSON.stringify(storeMe))
  //let result = JSON.parse(localStorage.getItem('test'))
  

  }


}