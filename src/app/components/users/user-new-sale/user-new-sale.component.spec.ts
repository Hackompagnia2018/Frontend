import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewSaleComponent } from './user-new-sale.component';

describe('UserNewSaleComponent', () => {
  let component: UserNewSaleComponent;
  let fixture: ComponentFixture<UserNewSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
