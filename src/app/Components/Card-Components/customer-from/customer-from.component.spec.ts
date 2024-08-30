import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFromComponent } from './customer-from.component';

describe('CustomerFromComponent', () => {
  let component: CustomerFromComponent;
  let fixture: ComponentFixture<CustomerFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
