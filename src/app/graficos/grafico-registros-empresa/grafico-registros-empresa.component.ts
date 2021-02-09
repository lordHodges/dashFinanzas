import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { IngresosEmpresasService } from 'src/app/services/ingresos-empresas.service';

@Component({
  selector: 'app-grafico-registros-empresa',
  templateUrl: './grafico-registros-empresa.component.html',
  styleUrls: ['./grafico-registros-empresa.component.scss'],
})
export class GraficoRegistrosEmpresaComponent implements OnInit {
  @Input()
  data: any[];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [
    'registros Hostal',
    'registros Abogados',
    'registros Rentacar',
  ];
  public pieChartData: SingleDataSet = [2, 4, 6];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    /* this.pieChartData = this.data;
    console.log(this.pieChartData); */
  }
}
