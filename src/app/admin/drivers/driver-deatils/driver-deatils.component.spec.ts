import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDeatilsComponent } from './driver-deatils.component';

describe('DriverDeatilsComponent', () => {
  let component: DriverDeatilsComponent;
  let fixture: ComponentFixture<DriverDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
