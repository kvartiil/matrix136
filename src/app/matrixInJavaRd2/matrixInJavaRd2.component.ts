import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-javard2',
  templateUrl: './matrixInJavaRd2.component.html',
  styleUrls: ['./matrixInJavaRd2.component.css']
})
export class JavaRd2Component implements OnInit {
  
  probleem: any;
  algefektiivsus: any;
  efektiivsus: any;
  algefektiivsusfl: any;
  efektiivsusfl: any;
  efektiivsusmuut: any;
  algrentaablus: any;
  rentaablus: any;
  algrentaablusfl: any;
  rentaablusfl: any;
  rentaablusmuut: any;
  
  efrentproblem: string;
  //uussisend: string;

  pikkus = 'Vähendasite kohustusi võrreldes lähteolukorraga poole võrra või rohkem, see on kindlasti oluline samm ja selle tegemiseks peab olema mingi ilmselge põhjendus.';
  uussisend = 'Vähendasite kohustusi võrreldes lähteolukorraga poole võrra või rohkem, see on kindlasti oluline samm ja selle tegemiseks peab olema mingi ilmselge põhjendus.';

  ngOnInit() {  
    //localStorage.setItem("loodudprobleem", this.loodudprobleem);
    //this.probleem = localStorage.getItem("loodudprobleem");
    //console.log(this.probleem);
    

} 

constructor() {
  setInterval(() => {
    this.probleem = localStorage.getItem("loodudprobleem");
    this.algefektiivsus = localStorage.getItem("javaefektiivsusalg");
    this.efektiivsus = localStorage.getItem("javaefektiivsus");
    this.algefektiivsusfl = parseFloat(this.algefektiivsus);
    this.efektiivsusfl = parseFloat(this.efektiivsus);
    //console.log("algefektiivsus", this.algefektiivsusfl);
    //console.log("efektiivsusfl", this.efektiivsusfl);
    if (this.efektiivsusfl <= this.algefektiivsusfl) {
      this.efektiivsusmuut = 'vahenes';
    }
    else if (this.efektiivsusfl > this.algefektiivsusfl) {
      this.efektiivsusmuut = 'suurenes';
    }
    //console.log("efektiivsusmuut", this.efektiivsusmuut);
    this.algrentaablus = localStorage.getItem("javarentaablusalg");
    this.rentaablus = localStorage.getItem("javarentaablus");
    this.algrentaablusfl = parseFloat(this.algrentaablus);
    this.rentaablusfl = parseFloat(this.rentaablus);
    if (this.rentaablusfl <= this.algrentaablusfl) {
      this.rentaablusmuut = 'vahenes';
    }
    else if (this.rentaablusfl > this.algrentaablusfl) {
      this.rentaablusmuut = 'suurenes';
    }

    if (this.efektiivsusmuut !== this.rentaablusmuut) {
      this.efrentproblem = 'Efektiivsus ja rentaablus on üldjuhul samasuunalised, need ei saa liikuda erinevates suundades.';
    }
    else {
      this.efrentproblem = '';
    }
    
   console.log("EfProblem", this.efrentproblem);
    
    if (this.probleem == "Te ei ole suutnud veel probleemi luua, kui varem ka lõite, seda uuesti ei kuvata." && this.efrentproblem != '') {
      localStorage.setItem("loodudprobleem", this.efrentproblem);     
    }

    else if (this.probleem !== "Te ei ole suutnud veel probleemi luua, kui varem ka lõite, seda uuesti ei kuvata." && this.efrentproblem != '' && this.uussisend.length < 160) {
      this.uussisend = this.probleem + ' ' + this.efrentproblem;
      localStorage.setItem("loodudprobleem", this.uussisend);     
    }

    console.log("uussisend:", this.uussisend);

    //console.log('Pikkus', this.pikkus.length);   

    //console.log("algrentaablusfl", this.algrentaablusfl);
    //console.log("rentaablusfl", this.rentaablusfl);
   // console.log("rentaablusmuut", this.rentaablusmuut);
   
   


    //this.lahtemudel = ((parseFloat(this.modelStruct)*100) - 100)*-1;
    //console.log(this.probleem);
  }, 10000);
}


}