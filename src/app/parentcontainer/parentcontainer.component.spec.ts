import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcontainerComponent } from './parentcontainer.component';

describe('ParentcontainerComponent', () => {
  let component: ParentcontainerComponent;
  let fixture: ComponentFixture<ParentcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
