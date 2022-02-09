import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoApresentacaoComponent } from './projeto-apresentacao.component';

describe('ProjetoApresentacaoComponent', () => {
  let component: ProjetoApresentacaoComponent;
  let fixture: ComponentFixture<ProjetoApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoApresentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
