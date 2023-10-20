import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasiCardRedComponent } from './emphasi-card-red.component';

describe('EmphasiCardRedComponent', () => {
  let component: EmphasiCardRedComponent;
  let fixture: ComponentFixture<EmphasiCardRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmphasiCardRedComponent]
    });
    fixture = TestBed.createComponent(EmphasiCardRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
