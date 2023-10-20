import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotoTopComponent } from './card-photo-top.component';

describe('CardPhotoTopComponent', () => {
  let component: CardPhotoTopComponent;
  let fixture: ComponentFixture<CardPhotoTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPhotoTopComponent]
    });
    fixture = TestBed.createComponent(CardPhotoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
