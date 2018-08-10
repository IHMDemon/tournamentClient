import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweenMeComponent } from './tween-me.component';

describe('TweenMeComponent', () => {
  let component: TweenMeComponent;
  let fixture: ComponentFixture<TweenMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweenMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweenMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
