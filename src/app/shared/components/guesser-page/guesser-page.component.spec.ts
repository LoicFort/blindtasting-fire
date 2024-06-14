import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractWineComponent } from './abstract-wine.component';

describe('AbstractWineComponent', () => {
  let component: AbstractWineComponent;
  let fixture: ComponentFixture<AbstractWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractWineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
