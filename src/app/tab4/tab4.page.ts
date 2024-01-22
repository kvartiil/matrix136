import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}

  lahtejutt() {
    localStorage.setItem("ylesanne", "Konsultandil pole juhtnööre...");
  }

  ReadMore:boolean = true
    visible:boolean = false
    onclick()
    {
      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    }

    ReadMore2:boolean = true
    visible2:boolean = false
    onclick2()
    {
      this.ReadMore2 = !this.ReadMore2;
      this.visible2 = !this.visible2
    }  

}