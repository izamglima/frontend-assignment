import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawThreeDComponent } from './draw-three-d.component';

describe('DrawThreeDComponent', () => {
  let component: DrawThreeDComponent;
  let fixture: ComponentFixture<DrawThreeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawThreeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
