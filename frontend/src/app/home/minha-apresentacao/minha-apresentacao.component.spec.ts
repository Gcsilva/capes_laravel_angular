import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaApresentacaoComponent } from './minha-apresentacao.component';

describe('MinhaApresentacaoComponent', () => {
  let component: MinhaApresentacaoComponent;
  let fixture: ComponentFixture<MinhaApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaApresentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
