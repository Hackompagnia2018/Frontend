import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNoVerifyComponent } from './users-no-verify.component';

describe('UsersNoVerifyComponent', () => {
  let component: UsersNoVerifyComponent;
  let fixture: ComponentFixture<UsersNoVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersNoVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNoVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
