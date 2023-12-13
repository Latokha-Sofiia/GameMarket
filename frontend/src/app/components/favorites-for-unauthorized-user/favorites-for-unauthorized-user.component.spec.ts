import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesForUnauthorizedUserComponent } from './favorites-for-unauthorized-user.component';

describe('FavoritesForUnauthorizedUserComponent', () => {
  let component: FavoritesForUnauthorizedUserComponent;
  let fixture: ComponentFixture<FavoritesForUnauthorizedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesForUnauthorizedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesForUnauthorizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
