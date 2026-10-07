import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmisiovisionComponent } from './cardmisiovision.component';

describe('CardmisiovisionComponent', () => {
  let component: CardmisiovisionComponent;
  let fixture: ComponentFixture<CardmisiovisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardmisiovisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmisiovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
