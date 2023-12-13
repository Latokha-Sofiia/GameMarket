import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthorizationComponent } from './seller-authorization.component';

describe('SellerAuthorizationComponent', () => {
  let component: SellerAuthorizationComponent;
  let fixture: ComponentFixture<SellerAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAuthorizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
