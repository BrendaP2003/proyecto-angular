import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCominachinaComponent } from './menu-cominachina.component';

describe('MenuCominachinaComponent', () => {
  let component: MenuCominachinaComponent;
  let fixture: ComponentFixture<MenuCominachinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCominachinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCominachinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
