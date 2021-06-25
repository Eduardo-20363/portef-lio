import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenRefComponent } from './even-ref.component';

describe('EvenRefComponent', () => {
  let component: EvenRefComponent;
  let fixture: ComponentFixture<EvenRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
