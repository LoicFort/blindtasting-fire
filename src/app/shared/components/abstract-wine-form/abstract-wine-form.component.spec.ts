import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractWineFormComponent } from './abstract-wine-form.component';

describe('AbstractWineFormComponent', () => {
  let component: AbstractWineFormComponent;
  let fixture: ComponentFixture<AbstractWineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractWineFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractWineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
