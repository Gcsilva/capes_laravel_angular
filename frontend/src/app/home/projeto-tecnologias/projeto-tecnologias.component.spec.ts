import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoTecnologiasComponent } from './projeto-tecnologias.component';

describe('ProjetoTecnologiasComponent', () => {
  let component: ProjetoTecnologiasComponent;
  let fixture: ComponentFixture<ProjetoTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoTecnologiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
