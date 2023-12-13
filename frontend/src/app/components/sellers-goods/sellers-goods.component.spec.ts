import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersGoodsComponent } from './sellers-goods.component';

describe('SellersGoodsComponent', () => {
  let component: SellersGoodsComponent;
  let fixture: ComponentFixture<SellersGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellersGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellersGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
