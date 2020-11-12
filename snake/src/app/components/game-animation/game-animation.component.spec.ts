import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAnimationComponent } from './game-animation.component';

describe('GameAnimationComponent', () => {
  let component: GameAnimationComponent;
  let fixture: ComponentFixture<GameAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
