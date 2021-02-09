import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEmpresasComponent } from './history-empresas.component';

describe('HistoryEmpresasComponent', () => {
  let component: HistoryEmpresasComponent;
  let fixture: ComponentFixture<HistoryEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
