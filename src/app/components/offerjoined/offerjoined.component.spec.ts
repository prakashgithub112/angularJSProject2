import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferjoinedComponent } from './offerjoined.component';

describe('OfferjoinedComponent', () => {
  let component: OfferjoinedComponent;
  let fixture: ComponentFixture<OfferjoinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferjoinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferjoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
