import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { createChart } from 'lightweight-charts';

@Component({
  selector: 'matrix-lagunaverde',
  templateUrl: './matrixLagunaVerde.component.html',
  styleUrls: [ './matrixLagunaVerde.component.css' ]
})
export class LagunaVerdeComponent implements OnInit  {

  @ViewChild('chart', {static: true})
  chart: ElementRef;
  
  name = 'Chart';

  constructor() {}


  ReadMore:boolean = true
  visible:boolean = false
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

 // @ViewChild('chart', {static: true})
 // chart: ElementRef;
  
 // name = 'Chart';

 // constructor() {}

 ngOnInit() {
    const chartElement = this.chart.nativeElement;
    const createdChart = createChart(chartElement, { width: 400, height: 300 });

    const lineSeries = createdChart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
    createdChart.timeScale().fitContent();
  }
}
