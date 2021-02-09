import { TestBed } from '@angular/core/testing';

import { IngresosEmpresasService } from './ingresos-empresas.service';

describe('IngresosEmpresasService', () => {
  let service: IngresosEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresosEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
