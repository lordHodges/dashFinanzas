import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { IngresosEmpresasService } from '../services/ingresos-empresas.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss'],
})
export class MainDashComponent {
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          pie: { cols: 1, rows: 2 },
          history: { cols: 1, rows: 4 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        pie: { cols: 2, rows: 4 },
        history: { cols: 4, rows: 4 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  data = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ingresosServices: IngresosEmpresasService
  ) {
    this.ingresosServices.getIngresos().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
