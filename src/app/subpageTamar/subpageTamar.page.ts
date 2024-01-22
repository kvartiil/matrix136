import { Component, OnInit } from '@angular/core';
import {CommentNode} from '../matrixTamar/matrixTamar.component'

@Component({
  selector: 'app-subpagetamar',
  templateUrl: './subpageTamar.page.html',
  styleUrls: ['./subpageTamar.page.scss'],
})
export class SubpageTamarPage implements OnInit {

  //constructor() { }

  ngOnInit() {
    localStorage.setItem("kasutus", 0);
  }

  comments:Array<CommentNode> = [];
  constructor(){    
    this.comments =  [new CommentNode("Lahendus juba küpseb konsultandi peas, kuid võid talle midagi meeldetuletuseks/meelemuutuseks kirjutada...")]
  }



}