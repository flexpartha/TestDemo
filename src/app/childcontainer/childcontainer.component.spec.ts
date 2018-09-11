import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcontainerComponent } from './childcontainer.component';

describe('ChildcontainerComponent', () => {
  let component: ChildcontainerComponent;
  let fixture: ComponentFixture<ChildcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
