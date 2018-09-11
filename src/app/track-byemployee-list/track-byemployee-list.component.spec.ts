import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByemployeeListComponent } from './track-byemployee-list.component';

describe('TrackByemployeeListComponent', () => {
  let component: TrackByemployeeListComponent;
  let fixture: ComponentFixture<TrackByemployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackByemployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackByemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
