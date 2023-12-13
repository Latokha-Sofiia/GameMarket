import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesForUnauthorizedUserComponent } from './purchases-for-unauthorized-user.component';

describe('PurchasesForUnauthorizedUserComponent', () => {
  let component: PurchasesForUnauthorizedUserComponent;
  let fixture: ComponentFixture<PurchasesForUnauthorizedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasesForUnauthorizedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasesForUnauthorizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
