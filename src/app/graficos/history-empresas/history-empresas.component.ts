import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-history-empresas',
  templateUrl: './history-empresas.component.html',
  styleUrls: ['./history-empresas.component.scss'],
})
export class HistoryEmpresasComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      fill: false,
      lineTension: 0,
    },
    {
      data: [70, 30, 25, 0, 48, 60, 32],
      label: 'Series b',
      fill: false,
      lineTension: 0,
    },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}
}
