import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPickComponent } from './counter-pick.component';

describe('CounterPickComponent', () => {
  let component: CounterPickComponent;
  let fixture: ComponentFixture<CounterPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
