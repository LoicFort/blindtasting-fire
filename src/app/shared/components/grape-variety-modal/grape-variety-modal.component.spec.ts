import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapeVarietyModalComponent } from './grape-variety-modal.component';

describe('GrapeVarietyModalComponent', () => {
  let component: GrapeVarietyModalComponent;
  let fixture: ComponentFixture<GrapeVarietyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrapeVarietyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapeVarietyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
