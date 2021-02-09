import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoRegistrosEmpresaComponent } from './grafico-registros-empresa.component';

describe('GraficoRegistrosEmpresaComponent', () => {
  let component: GraficoRegistrosEmpresaComponent;
  let fixture: ComponentFixture<GraficoRegistrosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoRegistrosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoRegistrosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
