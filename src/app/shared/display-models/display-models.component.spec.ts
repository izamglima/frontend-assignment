import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModelsComponent } from './display-models.component';

describe('DisplayModelsComponent', () => {
  let component: DisplayModelsComponent;
  let fixture: ComponentFixture<DisplayModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
