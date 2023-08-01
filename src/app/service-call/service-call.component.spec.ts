import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCallComponent } from './service-call.component';

describe('ServiceCallComponent', () => {
  let component: ServiceCallComponent;
  let fixture: ComponentFixture<ServiceCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCallComponent]
    });
    fixture = TestBed.createComponent(ServiceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
