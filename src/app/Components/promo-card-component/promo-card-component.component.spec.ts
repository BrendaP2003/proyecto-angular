import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCardComponentComponent } from './promo-card-component.component';

describe('PromoCardComponentComponent', () => {
  let component: PromoCardComponentComponent;
  let fixture: ComponentFixture<PromoCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
