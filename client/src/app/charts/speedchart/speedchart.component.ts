import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-speedchart',
  templateUrl: './speedchart.component.html',
  styleUrls: ['./speedchart.component.css']
})
export class SpeedchartComponent implements OnInit {

  chartOptions:{};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions ={
    title: {
      text: 'Motor I'
  },

  subtitle: {
      text: 'Tank Plant I'
  },

  yAxis: {
      title: {
          text: 'Average Speed'
      }
  },

  xAxis: {
      accessibility: {
          rangeDescription: 'Range: 2010 to 2017'
      }
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  credits:{
    enabled: false,
  },

  exporting:{
    enabled: true,
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },

  series: [{
      name: 'Speed',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
      name: 'Voltage',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
      name: 'Current',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
      name: 'Power',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
};
HC_exporting(Highcharts);

setTimeout(() =>{
  window.dispatchEvent(
    new Event('resize')
  )
    },300);
               
  }
};

