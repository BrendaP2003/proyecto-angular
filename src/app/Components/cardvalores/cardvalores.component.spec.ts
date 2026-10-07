import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvaloresComponent } from './cardvalores.component';

describe('CardvaloresComponent', () => {
  let component: CardvaloresComponent;
  let fixture: ComponentFixture<CardvaloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardvaloresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardvaloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
