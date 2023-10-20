import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoPhotoComponent } from './card-no-photo.component';

describe('CardNoPhotoComponent', () => {
  let component: CardNoPhotoComponent;
  let fixture: ComponentFixture<CardNoPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNoPhotoComponent]
    });
    fixture = TestBed.createComponent(CardNoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
