import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplatilloComponent } from './cardplatillo.component';

describe('CardplatilloComponent', () => {
  let component: CardplatilloComponent;
  let fixture: ComponentFixture<CardplatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardplatilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardplatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
