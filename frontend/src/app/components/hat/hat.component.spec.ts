import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatComponent } from './hat.component';

describe('HatComponent', () => {
  let component: HatComponent;
  let fixture: ComponentFixture<HatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
