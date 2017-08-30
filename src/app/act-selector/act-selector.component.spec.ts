import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSelectorComponent } from './act-selector.component';

describe('ActSelectorComponent', () => {
  let component: ActSelectorComponent;
  let fixture: ComponentFixture<ActSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
