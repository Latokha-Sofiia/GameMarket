import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingNewGameComponent } from './creating-new-game.component';

describe('CreatingNewGameComponent', () => {
  let component: CreatingNewGameComponent;
  let fixture: ComponentFixture<CreatingNewGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingNewGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatingNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
