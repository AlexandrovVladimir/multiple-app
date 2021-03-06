import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocComponent } from 'projects/app1/src/app/docs/container/view-doc/view-doc.component';

describe('ViewDocComponent', () => {
  let component: ViewDocComponent;
  let fixture: ComponentFixture<ViewDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
