import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayObjectsComponent } from './display-objects.component';

describe('DisplayModelsComponent', () => {
  let component: DisplayObjectsComponent;
  let fixture: ComponentFixture<DisplayObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
