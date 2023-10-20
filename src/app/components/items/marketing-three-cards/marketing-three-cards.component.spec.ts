import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingThreeCardsComponent } from './marketing-three-cards.component';

describe('MarketingThreeCardsComponent', () => {
  let component: MarketingThreeCardsComponent;
  let fixture: ComponentFixture<MarketingThreeCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingThreeCardsComponent]
    });
    fixture = TestBed.createComponent(MarketingThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
