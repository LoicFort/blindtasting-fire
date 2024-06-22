import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSessionModalComponent } from './view-session-modal.component';

describe('ViewSessionModalComponent', () => {
  let component: ViewSessionModalComponent;
  let fixture: ComponentFixture<ViewSessionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSessionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSessionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
