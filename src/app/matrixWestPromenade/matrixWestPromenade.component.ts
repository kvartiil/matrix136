import { Component, OnInit } from "@angular/core";
import { jsPDF } from "jspdf";

@Component({
  selector: "matrix-westpromenade",
  templateUrl: "./matrixWestPromenade.component.html",
  styleUrls: ["./matrixWestPromenade.component.css"]
})
export class WestPromenadeComponent implements OnInit {
  name = "Angular";
  
  konsultantkirjake: any;
  juhtnoorikesisend: any;
  juhtnoorike: any;

  constructor() {
    this.konsultantkirjake = localStorage.getItem("pdftext");
    this.juhtnoorikesisend =  localStorage.getItem("ylesanne");
    this.juhtnoorike = "Konsultandi ülesande täpsem suunitlus: " + this.juhtnoorikesisend;
  }

  ngOnInit(){
    //console.log(this.comments);
    this.konsultantkirjake = localStorage.getItem("pdftext");
    
  }

  //this.robotrnt = localStorage.getItem("rentaablus");
  
  
  generatePDF() {
    //var doc = new jsPDF();
    //doc.text(20, 20, this.konsultantkirjake);
    //doc.text(20, 20, this.konsultantkirjake);
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
      compress: true,
    });

    // PAGE FORMAT
    const pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

    const pageWidth =
      doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    // TITULO
    const myTitle = 'Konsultandi eepos...';
    doc.setFontSize(40);
    doc.setTextColor(0);
    doc.text(myTitle, pageWidth / 2, 40, { align: 'center' }); //footer
    
    console.log("konsulttandikirjake", this.konsultantkirjake);
    const data = this.konsultantkirjake;
     // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ';
    doc.setFontSize(16);
    doc.setTextColor(0);

    const splitTitle = doc.splitTextToSize(data, 360);
    doc.text(splitTitle, 40, 100);


    const data2 = this.juhtnoorike;
    const splitTitle2 = doc.splitTextToSize(data2, 360);
    doc.text(splitTitle2, 40, 300);

    const myFooter = 'Andmed konfidentsiaalsuse kohta - vaat, et ei näita!';
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(myFooter, pageWidth / 2, pageHeight - 10, { align: 'center' });

    doc.save("Konsultandieepos.pdf");
  }
}
