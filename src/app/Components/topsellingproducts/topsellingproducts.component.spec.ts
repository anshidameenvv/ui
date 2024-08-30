import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellingproductsComponent } from './topsellingproducts.component';

describe('TopsellingproductsComponent', () => {
  let component: TopsellingproductsComponent;
  let fixture: ComponentFixture<TopsellingproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsellingproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsellingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
