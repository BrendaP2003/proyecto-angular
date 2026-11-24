import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinfhistoriaComponent } from './cardinfhistoria.component';

describe('CardinfhistoriaComponent', () => {
  let component: CardinfhistoriaComponent;
  let fixture: ComponentFixture<CardinfhistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardinfhistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardinfhistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
